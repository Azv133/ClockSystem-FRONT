import { useState } from "react"
import { loginUser } from "../../helpers/loginHelper";
import Swal from "sweetalert2";

const login = async(email, password) => {
  const result = await loginUser(email, password);

  if(result.status){
    Swal.fire({
      title: "Éxito!",
      text: result.message,
      icon: "success"
    });
  }else{
    Swal.fire({
      icon: "error",
      title: "Error",
      text: result.message,
    });
  }

};

export const LoginCard = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div className="login-card">
        <h2>Bienvenido a ClockSystem</h2>

        <input 
          type="text"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />

        <button className="btn-white" onClick={() => login(email, password)}>
            <img src="public\svg\Logo2.svg" alt="" />
            <label>Iniciar Sesión</label>
        </button>
    </div>
  )
}
