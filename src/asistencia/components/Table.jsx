import "./comp-styles.css"

export const Table = () => {
  return (
    <div className="flex justify-end mt-10">
      
      <div className="table">
        
      <div className="table-row table-header">
        <div className="table-cell">#</div>
        <div className="table-cell">Hora de entrada</div>
        <div className="table-cell">Hora de salida</div>
      </div>

      <div className="table-row">
        <div className="table-cell">1</div>
        <div className="table-cell"><span className="indicator green-indicator"></span>08:29:12</div>
        <div className="table-cell"><span className="indicator red-indicator"></span>12:54:59</div>
      </div>
      <div className="table-row">
        <div className="table-cell">1</div>
        <div className="table-cell"><span className="indicator green-indicator"></span>08:29:12</div>
        <div className="table-cell"><span className="indicator red-indicator"></span>12:54:59</div>
      </div>
      <div className="table-row">
        <div className="table-cell">1</div>
        <div className="table-cell"><span className="indicator green-indicator"></span>08:29:12</div>
        <div className="table-cell"><span className="indicator red-indicator"></span>12:54:59</div>
      </div>
      <div className="table-row">
        <div className="table-cell">1</div>
        <div className="table-cell"><span className="indicator green-indicator"></span>08:29:12</div>
        <div className="table-cell"><span className="indicator red-indicator"></span>12:54:59</div>
      </div>
    </div>


    </div>
  )
}
