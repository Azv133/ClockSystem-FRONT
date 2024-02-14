import { useState } from "react";
import { useUser } from "../../../context/UserContext";
import { compareToken } from "../../../helpers/userHelper"
import Swal from "sweetalert2";
import { mark } from "../../../helpers/markingHelper";
import { ID_TIPO_MARCACION } from "../../../helpers/globalVariables";

export const VerifyModal = ({ hideVer, setMarkingkey, markingKey }) => {

  const  { user } = useUser();

  const [code, setCode] = useState('');

  const onCodeChange = ({ target }) => {
    setCode(target.value)
  }

  const verifyCode = async() => {
    const { status, message } = await compareToken(code, user.secret);
    if(status){

      const res = await mark(user.id_usuario, ID_TIPO_MARCACION);

      console.log(res);

      if(res.status){
        Swal.fire({
          title: "Éxito!",
          text: res.message,
          icon: "success"
        }).then((res) => {
            setMarkingkey(markingKey + 1);
            hideVer();
        });
      }else{
        console.log(res.message)
      }
    }else{
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });
    }
  }

  return (
    <div className="modal-overlay">
        <div className="modal-card large">
            <h4>Código de verificación:</h4>
            
            <input type="number" name="code" value={ code } onChange={ onCodeChange }/>

            <div className="flex flex-col justify-center items-center gap-3 mt-10">
              <button className="modal-btn blue sm-btn" onClick={ verifyCode }>
                <img src="public\svg\Tick circle.svg" alt="" />
                <label htmlFor="">Validar</label>
              </button>
              <button className="modal-btn gray sm-btn" onClick={ hideVer }>
                <img src="public\svg\arrow-left.svg" alt="" />
                <label htmlFor="">Atrás</label>
              </button>
            </div>
        </div>
      </div>
  )
}
