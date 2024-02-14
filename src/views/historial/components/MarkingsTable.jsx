import { useState } from "react"
import { HistorialDetailModal } from "./HistorialDetailModal"

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


export const MarkingsTable = ({ markings }) => {

  const [openDetail, setOpenDetail] = useState(false);
  const [markingGroup, setMarkingGroup] = useState({});

  const openModal = (group) => {
    setMarkingGroup(group);
    setOpenDetail(true);
  }

  return (
    <>
    {
        openDetail && (
          <HistorialDetailModal
            markingGroup={ markingGroup }
            setOpenDetail={ setOpenDetail }            
          />
        )
      }
      <div className="flex justify-end mt-10">
      
        <div className="table">
          
          <div className="table-row table-header">
            <div className="table-cell">#</div>
            <div className="table-cell">Fecha</div>
            <div className="table-cell">Hora de entrada</div>
            <div className="table-cell">Hora de salida</div>
            <div className="btn-width"></div>
            <div className="btn-width"></div>
          </div>

          {
            markings.map( (mark, index) => {
              return (
                <div className="table-row" key={ index }>
                  <div className="table-cell">{ index + 1 }</div>
                  <div className="table-cell">
                    <div className="flex items-center gap-4">
                      <img src="public\images\calendar.png" alt="" />
                      { getFormatDate(mark.fecha) }
                    </div>
                  </div>
                  <div className="table-cell text-center">
                    <span className="indicator green-indicator"></span>
                    { getFormatTime(mark.inicio) }
                  </div>
                  <div className="table-cell text-center">
                    {
                      mark.fin && (
                        <>
                          <span className="indicator red-indicator"></span>
                          { getFormatTime(mark.fin) }
                        </>
                      )
                    }
                    
                  </div>
                  <div className="">
                    <button 
                      className="btn-base bg-blue btn-width"
                      onClick={ () => openModal(mark.detail) }
                    >Detalle</button>
                  </div>
                </div>
              )
            })
          }

      </div>
    </div>
    </>
  )
}
