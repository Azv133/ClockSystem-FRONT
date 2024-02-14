import { useNavigate } from "react-router-dom"
import { useUser } from "../context/UserContext";

export const SessionButtons = () => {

  const { user } = useUser();

  const navigate = useNavigate();

  return (
    <>
    <div className="flex justify-end gap-4">
      <button className="dark-button m-btn">
        <img src="public\svg\user.svg" alt="" />
        <label>{ user && user.nombres }</label>
      </button>
      <button
        className="dark-button m-btn"
        onClick={ () => navigate('/') }
      >
        <img src="public\svg\Out Right.svg" alt="" />
        <label>Cerrar Sesión</label>
      </button>
    </div>
    </>
  )
}
