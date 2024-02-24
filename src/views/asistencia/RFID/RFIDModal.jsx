import React, { useEffect, useState } from 'react'
import { useUser } from '../../../context/UserContext';
import { mark } from '../../../helpers/markingHelper';
import Swal from 'sweetalert2';
import { useMqtt } from '../../../context/MqttContext';
import { ID_TIPO_MARCACION_RFID } from '../../../helpers/globalVariables';

export const RFIDModal = ({ showVer, hideRFID, setMarkingkey, markingKey, showSuccess }) => {

    const { user } = useUser();
    const { currentMessage, lastUpdate, publishMessage } = useMqtt();

    useEffect(() => {
        const actualTime = new Date();
        const differenceInSeconds = (actualTime - lastUpdate) / 1000;

        if (differenceInSeconds <= 2) {
            verifyRFID();
        }

    }, [currentMessage])

    const verifyRFID = async() => {
        console.log('Verificando');
        if(!user){
            console.log('Usuario no autenticado')
            return;
        }
        if(currentMessage === user.tarjetaRFID){
            const res = await mark(user.id_usuario, ID_TIPO_MARCACION_RFID)
            publishMessage('true');
            hideRFID();
            setMarkingkey(markingKey + 1);
            showSuccess();
        }else{
            publishMessage('false');
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Credenciales erróneas.",
            });
        }
      }

    const auth2fa = () => {
        hideRFID();
        showVer();
    }

  return (
    <>
        <div className="modal-overlay">
            <div className="modal-card medium">
                <h3 className='mb-1'>Registro con tarjeta de identificación</h3>
                <h5 className='mb-5'>Presente su tarjeta para marcar su asistencia.</h5>

                <img src="public\images\card.png" className='cardModal mb-5' alt="" />

                <h6>¿No dispone de la tarjeta en este momento?</h6>
                <p className='modalText'>Por favor, utilice el enlace de <a onClick={ auth2fa }>autenticación 2F</a>.</p>
                
                <div className="flex flex-col justify-center items-center gap-3 mt-6">
                <button className="modal-btn gray sm-btn" onClick={ hideRFID }>
                    <img src="public\svg\arrow-left.svg" alt="" />
                    <label htmlFor="">Atrás</label>
                </button>
                </div>
            </div>
        </div>    
    </>
  )
}
