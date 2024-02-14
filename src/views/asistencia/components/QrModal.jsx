import { useUser } from "../../../context/UserContext"
import "./comp-styles.css"

export const QrModal = ({ qrModal, qrURL }) => {

  const { user, setUser } = useUser();

  const updateQrState = () => {
    setUser({...user, qrState: true});
    qrModal();
  }

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-card">
            <h1>Digitalización del código QR</h1>
            <p>Use la aplicación Google Authenticator para escanear el código QR por única vez. Así la aplicación Google Authenticator y la cuenta quedarán emparejadas.</p>
            <p>Despues de escanear el código QR, elija "Siguiente".</p>
            <div className="flex justify-center mt-8">
              <img src={ qrURL } alt="" />
            </div>

            <div className="flex justify-center gap-8 mt-10">
              <button className="modal-btn gray bg-btn" onClick={ qrModal }>
                <img src="public\svg\arrow-left.svg" alt="" />
                <label htmlFor="">Atrás</label>
              </button>
              <button className="modal-btn black-color bg-btn" onClick={ updateQrState }>
                <label htmlFor="">Siguiente</label>
                <img src="public\svg\right.svg" alt="" />
              </button>
            </div>
        </div>
      </div>
    </>
  )
}
