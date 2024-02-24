import mqtt from "mqtt";
import { createContext, useContext, useEffect, useState } from "react"
import { BROKER_PASSWORD, BROKER_URL, BROKER_USERNAME, RECEIVE_TOPIC, SEND_TOPIC } from "../helpers/globalVariables";

const MqttContext = createContext();

const client = mqtt.connect(BROKER_URL, {
    username: BROKER_USERNAME,
    password: BROKER_PASSWORD,
});

export const MqttProvider = ({ children }) => {
    const [currentMessage, setCurrentMessage] = useState(null)
    const [lastUpdate, setLastUpdate] = useState(new Date())

    const [isBrokerConnected, setIsBrokerConnected] = useState(false);

    const reconnectBroker = () => {
        const intervalId = setInterval(() => {
            if (!client.connected) {
                console.log('Intentando reconectar al broker...');
                client.reconnect();
            } else {
                console.log('Conectado al broker');
                setIsBrokerConnected(true);
                clearInterval(intervalId);
            }
        }, 2000);
    };

    useEffect(() => {
        if (!isBrokerConnected) {
            reconnectBroker();
        }
    }, [isBrokerConnected]);

    useEffect(() => {
        const handleMessage = async(topic, message) => {
            console.log(`Mensaje Recibido en el tema ${topic}: ${message}`);
            const processedMessage = String(message).replace(/\s/g, '').toUpperCase();
            console.log(processedMessage)
            setCurrentMessage(processedMessage)
            setLastUpdate(new Date)
        };

        const handleConnect = async() => {
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
    }, [,isBrokerConnected]);

    const publishMessage = (message) => {
        if (client.connected) {
          client.publish(SEND_TOPIC, message, (err) => {
            if (err) {
              console.error('Error al publicar el mensaje:', err);
            } else {
              console.log(`Mensaje publicado en el tema ${SEND_TOPIC}: ${message}`);
            }
          });
        } else {
          console.error('El cliente MQTT no está conectado. No se pudo publicar el mensaje.');
        }
      };

    return (
        <MqttContext.Provider value={{ currentMessage, lastUpdate, publishMessage }}>
            { children }
        </MqttContext.Provider>
    )
}

export const useMqtt = () => {
  return useContext(MqttContext);
}
