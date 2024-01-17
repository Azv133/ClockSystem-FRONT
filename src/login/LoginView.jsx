import { Footer, Header } from "../general"
import { LoginCard } from "./components/LoginCard"
import './styles.css';

export const LoginView = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-center">
            <Header />
        </div>
        
        <div className="flex mt-14 content-container">
            <div className="flex-1 flex flex-col main-login">
                <h1>Plataforma de marcado <br />
                    de asistencia 
                </h1>
                <h1 className="black">ClockSystem</h1>

                <div className="mt-9">
                    <p>¡Bienvenido de vuelta a SmartClock! Ingresa a tu cuenta para experimentar la eficiencia de nuestra gestión de asistencia con tecnología RFID.</p>
                </div>

                <div className="mt-11">
                    <LoginCard />
                </div>

            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="public\images\ImagClock.png" alt="" width={'434px'} height={'521px'} />
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}
