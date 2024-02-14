const getFormatDate = (date) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
}
const getFormatTime = (date) => {
  const dateTime = new Date(date);
  const hours = String(dateTime.getUTCHours()).padStart(2, '0');
  const minutes = String(dateTime.getUTCMinutes()).padStart(2, '0');
  const seconds = String(dateTime.getUTCSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}


export const HistorialDetailModal = ({ markingGroup, setOpenDetail }) => {
  return (
    <>
        <div className="modal-overlay">
            <div className="modal-card modal-card-bg">
                <h2>Detalle de asistencia</h2>
                <div className="flex justify-end mt-10">
      
                  <div className="table">
                    
                    <div className="table-row table-header">
                      <div className="table-white">#</div>
                      <div className="table-white">Fecha</div>
                      <div className="table-white">Hora de salida</div>
                      <div className="table-white">Hora de salida</div>
                    </div>

                    {
                      markingGroup.map( (mg, index) => {
                        return (
                          <div className="table-row" key={ index }>
                            <div className="table-cell">{ index + 1 }</div>
                            <div className="table-cell">
                            <div className="flex items-center gap-4">
                              <img className="img-sm" src="public\images\calendar.png" alt=""/>
                              { getFormatDate(mg.fecha) }
                            </div>
                            </div>
                            <div className="table-cell text-center">
                              <span className="indicator green-indicator"></span>
                              { getFormatTime(mg.marcacion_entrada) }
                            </div>
                            <div className="table-cell text-center">
                              {
                                mg.marcacion_salida && (
                                  <>
                                    <span className="indicator red-indicator"></span>
                                    { getFormatTime(mg.marcacion_salida) }
                                  </>
                                )
                              }
                            </div>
                          </div>
                        )
                      })
                    }

                    

                    <div className="flex flex-col justify-center items-center gap-3 mt-10">
                      <button 
                        className="modal-btn blue sm-btn bg-button-modal"
                        onClick={ () => setOpenDetail(false) }
                      >
                        <label htmlFor="">Cerrar</label>
                      </button>
                    </div>

                  </div>
                </div>
            </div>
      </div>
    </>
  )
}
