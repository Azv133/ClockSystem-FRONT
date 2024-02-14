
export const MarkButtons = ({ showVer, markings }) => {

  return (
    <div className="flex justify-end gap-5">
      <button 
        className={ markings.length > 0 ? (markings[markings.length - 1].marcacion_salida ? `as-button green-border` : `as-button` ) : `as-button green-border` } 
        onClick={ showVer }
        disabled={ markings.length > 0 && !markings[markings.length - 1].marcacion_salida }
        >
        <div className="img-cont">
          <img src="public\svg\green-dots.svg" alt="" />
        </div>
        <label>Hora de entrada</label>
      </button>

      <button 
        className={ markings.length > 0 ? (markings[markings.length - 1].marcacion_salida ? `as-button` : `as-button red-border` ) : `as-button` } 
        onClick={ showVer }
        disabled={ markings.length === 0 || (markings.length > 0 && markings[markings.length - 1].marcacion_salida) }
      >
        <div className="img-cont">
          <img src="public\svg\red-dots.svg" alt="" />
        </div>
        <label>Hora de salida</label>
      </button>
    </div>
  )
}
