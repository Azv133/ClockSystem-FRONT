import "./comp-styles.css"

const getFormatTime = (date) => {
  const dateTime = new Date(date);
  const hours = String(dateTime.getUTCHours()).padStart(2, '0');
  const minutes = String(dateTime.getUTCMinutes()).padStart(2, '0');
  const seconds = String(dateTime.getUTCSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export const Table = ({ markings }) => {
  
  return (
    <div className="flex justify-end mt-10">
      
      <div className="table">
        
      <div className="table-row table-header">
        <div className="table-cell">#</div>
        <div className="table-cell">Hora de entrada</div>
        <div className="table-cell">Hora de salida</div>
      </div>

      {
          markings.map( (m, index) => {
            return (
              <div key={index} className="table-row">
                <div className="table-cell">{ index + 1 }</div>
                <div className="table-cell">
                  {
                    m.marcacion_entrada &&
                    (
                      <span className="indicator green-indicator"></span>
                    )
                  }   
                  { m.marcacion_entrada && getFormatTime(m.marcacion_entrada) }
                </div>
                <div className="table-cell">
                  {
                    m.marcacion_salida &&
                    (
                      <span className="indicator red-indicator"></span>
                    )
                  } 
                  { m.marcacion_salida && getFormatTime(m.marcacion_salida) }
                </div>
              </div>
            )
          })
        }

    </div>


    </div>
  )
}
