import { useNavigate } from "react-router-dom"

export const SessionButtons = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="flex justify-end gap-4">
      <button className="dark-button m-btn">
        <img src="public\svg\user.svg" alt="" />
        <label>Ricardo Manuel Torres Velasquez</label>
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
