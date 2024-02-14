import { useForm } from "../../../hooks/useForm";
import { useLogin } from "../../../hooks/useLogin";

export const LoginCard = () => {

  const formFields = {
    email: '',
    password: ''
  };

  const {onInputChange, email, password} = useForm(formFields);
  
  const { login } = useLogin();

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
