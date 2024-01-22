
export const MarkButtons = () => {
  return (
    <div className="flex justify-end gap-5">
      <button className="as-button">
        <div className="img-cont">
          <img src="public\svg\green-dots.svg" alt="" />
        </div>
        <label>Hora de entrada</label>
      </button>

      <button className="as-button">
        <div className="img-cont">
          <img src="public\svg\red-dots.svg" alt="" />
        </div>
        <label>Hora de salida</label>
      </button>
    </div>
  )
}
