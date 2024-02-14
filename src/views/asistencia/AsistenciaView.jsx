import { ButtonsBar, SessionButtons } from '../../general'
import { ClockCard, MarkButtons, QrModal, Table, VerifyModal } from "./components"
import { Footer } from '../../general'
import './styles.css'
import { useEffect, useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { getQrLink } from '../../helpers/userHelper'
import { useMarking } from '../../hooks/useMarking'

export const AsistenciaView = () => {

  const navigate = useNavigate();
  const [markingKey, setMarkingKey] = useState(0);
  const { markings } = useMarking(markingKey);

  const { user } = useUser();
  
  useEffect(() => {
    if(!user){ navigate('/') }
  }, [])
  
  const [qrURL, setQrURL] = useState(null);
  
  const [showQRModal, setShowQRModal] = useState(false);

  const [showVerModal, setShowVerModal] = useState(false);

  const showQR = async() => {
    const res = await getQrLink(user.correo, user.secret);
    setQrURL(res.url);
    setShowQRModal(true);
  };

  const hideQr = () => {
    setShowQRModal(false);
  }

  const showVer = () => {
    setShowVerModal(true);
  }
  
  const hideVer = () => {
    setShowVerModal(false);
  };

  const viewHistorial = () => {
    navigate('/historial');
  }

  return (
    <>
    { showVerModal && <VerifyModal hideVer={ hideVer } markingKey={ markingKey } setMarkingkey={ setMarkingKey } /> }
    {
      showQRModal && <QrModal qrModal={hideQr} qrURL={ qrURL } />
    }
      <div className='content-container pt-4 px-5'>
          <div className="flex justify-between mb-11">
            <ButtonsBar 
              qrModal={showQR}
            />
            <SessionButtons />
          </div>

          <div className='flex justify-center'>
              <img className='img-top' src="public\images\top-bar.png" alt="" />
          </div>

          <div className='flex dark-card mt-12 mb-6 px-14 relative'>
            <div className='flex flex-col w-1/2'>
              <div className='b-box mt-4'>
                <img src="public\svg\Logo-3.png" alt="" />
                <label>¡Bienvenido Ricardo a ClockSystem!</label>
              </div>
              
              <div className='flex mt-14'>
                <ClockCard />
              </div>
            </div>

            <div className='flex flex-col text-center w-1/2'>
              <h4 className='white-text pa'>{ user && user.nombres }</h4>
              <MarkButtons showVer={ showVer } markings={ markings } />
              <Table markings={ markings } />
              <div className='flex justify-center mt-10'>
                <button 
                  className='his-btn'
                  onClick={ () => viewHistorial() }
                >
                  <label>Ver historial</label>
                  <img src="public\svg\arrow-right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

      <div>
          <Footer />
      </div>
    </>
  )
}
