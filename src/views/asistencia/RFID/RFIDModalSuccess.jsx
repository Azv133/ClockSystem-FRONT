
export const RFIDModalSuccess = ({ hideSuccess }) => {
  return (
    <div className="modal-overlay">
        <div className="modal-card medium">
            <h3 className='mb-1'>Registro con tarjeta de identificación</h3>
            <h5 className='mb-5'>¡Registro completado con éxito! ¡Gracias por tu colaboración</h5>

            <img src="public\images\Success-card.png" className='cardModal mb-5' alt="" />

            <div className="flex flex-col justify-center items-center gap-3 mt-6">
              <button 
                className="modal-btn blue sm-btn"
                onClick={ hideSuccess }
              >
                <label htmlFor="">Listo</label>
              </button>
            </div>
        </div>
      </div>
  )
}
