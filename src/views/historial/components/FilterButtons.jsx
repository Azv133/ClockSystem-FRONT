import { forwardRef, useState } from "react"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { getGroupMarkings, getGroupMarkingsByDate } from "../../../helpers/markingHelper";
import { useUser } from "../../../context/UserContext";
import Swal from "sweetalert2";

const getFormatDate2 = (date) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedMonth}-${formattedDay}-${year}`;

  return formattedDate;
}

export const FilterButtons = ({ setMarkings }) => {
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { user } = useUser();

  const SelectDateButton = forwardRef(({ value, onClick }, ref) => (
    <button 
      className="bg-violet"
      onClick={ onClick }
      ref={ ref }
    >
      <img src="public\svg\calendar.svg" alt="" />
      { value ? value : 'Seleccionar fecha' }
    </button>
  ))

  const borrarFiltros = async() => {
    setStartDate(null);
    setEndDate(null);
    
    const result = await getGroupMarkings(user.id_usuario);
    if(result.status){
      setMarkings(result.marcaciones);
    }
  }

  const buscar = async() => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    if(startDate && endDate && date2 > date1){
      const result = await getGroupMarkingsByDate(user.id_usuario, getFormatDate2(startDate), getFormatDate2(endDate));
      if(result.status){
        setMarkings(result.marcaciones);
      }
    }else{
      Swal.fire({
        icon: "error",
        title: "Error",
        text: 'Seleccione un rango válido',
      });
    }
  }

  return (
    <div className='fiter-buttons'>
        <h4>Fecha desde:</h4>

        <DatePicker 
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<SelectDateButton />}
        />

        <h4>Hasta</h4>

        <DatePicker 
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          customInput={<SelectDateButton />}
        />

        <button 
          className="bg-blue"
          onClick={ buscar }
        >
        <img src="public\svg\search.svg" alt="" />
        Buscar
        </button>

        <button 
          className="bg-red"
          onClick={ borrarFiltros }
        >
        <img src="public\svg\delete.svg" alt="" />
          Borrar filtros
        </button>
    </div>
  )
}
