import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginView } from './login/LoginView';
import { AsistenciaView } from './asistencia/AsistenciaView';
import { Clock } from './asistencia/components/clock/Clock';


export const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <LoginView/> } />
            <Route path='/menu' element={ <AsistenciaView /> } />
            <Route  path='/clock' element={ <Clock /> } />
        </Routes>
    </Router>
  )
}
