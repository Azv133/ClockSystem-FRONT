import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { loginUser } from "../helpers/loginHelper";
import Swal from "sweetalert2";

export const useLogin = () => {
  
    const { user ,setUser } = useUser();

    const navigate = useNavigate();
  
    const login = async(email, password) => {
      const result = await loginUser(email, password);
    
      if(result.status){
        Swal.fire({
          title: "Éxito!",
          text: result.message,
          icon: "success"
        }).then((res) => {
          setUser({...result.user, qrStatus: result.qrStatus});
          navigate('/menu');
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result.message,
        });
      }
    
    };

    return{
        login
    }
}
