import { loginUser } from "../../helpers/loginHelper";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const LoginCard = () => {
  
  const navigate = useNavigate();

  const formFields = {
    email: '',
    password: ''
  };

  const {onInputChange, email, password} = useForm(formFields);

  const login = async(email, password) => {
    const result = await loginUser(email, password);
  
    if(result.status){
      Swal.fire({
        title: "Éxito!",
        text: result.message,
        icon: "success"
      }).then((result) => {
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
  

  return (
    <div className="login-card">
        <h2>Bienvenido a ClockSystem</h2>

        <input 
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input 
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />

        <button className="btn-white" onClick={() => login(email, password)}>
            <img src="public\svg\Logo2.svg" alt="" />
            <label>Iniciar Sesión</label>
        </button>
    </div>
  )
}
