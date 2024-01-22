
export const ButtonsBar = () => {
  return (
    <div className="buttons-bar">
      <div className="flex justify-start items-center gap-3">
        <img src="public\svg\logo1.svg" alt="" width={'28.067px'} height={'28px'} />
        <label className="normal-text">ClockSystem</label>
      </div>

      <div className="flex justify-end items-center gap-8">
        <button className="light-text selected-btn">Asistencia</button>
        <button className="light-text">Historial</button>
        <button className="light-text">Comunidad</button>
        <button className="dark-button sm-btn">
          <img src="public\svg\autentication.svg" alt="" />
          <label>Autenticación</label>
        </button>
      </div>
    </div>
  )
}
