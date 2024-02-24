import mqtt from 'mqtt';
import { BROKER_PASSWORD, BROKER_URL, BROKER_USERNAME, RECEIVE_TOPIC, SEND_TOPIC } from './globalVariables';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import Swal from 'sweetalert2';
import { mark } from './markingHelper';

const client = mqtt.connect(BROKER_URL, {
    username: BROKER_USERNAME,
    password: BROKER_PASSWORD,
});

export const useMQTT = ( hideRFID,  setMarkingkey, markingKey, setSuccess ) => {
    const { user } = useUser();
    const [currentMessage, setCurrentMessage] = useState('');

    const [startKey, setStartKey] = useState(0)

    useEffect(() => {
        const handleMessage = (topic, message) => {
            console.log(`Mensaje Recibido en el tema ${topic}: ${message}`);
            const processedMessage = String(message).replace(/\s/g, '').toUpperCase();
            setCurrentMessage(processedMessage);
            verifyRFID();
        };

        const handleConnect = () => {
            console.log('Conectado al broker');
            client.subscribe(RECEIVE_TOPIC, (err) => {
                if (!err) {
                    console.log(`Suscrito al tema: ${RECEIVE_TOPIC}`);
                }
            });
        };

        const handleDisconnect = () => {
            console.log('Desconectado del broker');
        };

        const handleError = (err) => {
            console.error('Error en la conexión:', err);
        };

        client.on('connect', handleConnect);
        client.on('close', handleDisconnect);
        client.on('error', handleError);
        client.on('message', handleMessage);

        return () => {
            client.removeListener('connect', handleConnect);
            client.removeListener('close', handleDisconnect);
            client.removeListener('error', handleError);
            client.removeListener('message', handleMessage);
        };
    }, [startKey]);

    const verifyRFID = async() => {
        console.log('Verificando');
        if(!user){
            console.log('Usuario no autenticado')
            return;
        }
        if(currentMessage === user.tarjetaRFID){
            const res = await mark(user.id_usuario, ID_TIPO_MARCACION_RFID);
            publishMessage();
            hideRFID();
            setMarkingkey(markingKey + 1);
            setSuccess(true);
        }else{
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Credenciales erróneas.",
          });
        }
      }

    return {
        setStartKey,
        currentMessage,
    };
}
