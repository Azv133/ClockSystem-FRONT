import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginView } from './views/login/LoginView';
import { AsistenciaView } from './views/asistencia/AsistenciaView';
import { HistorialView } from './views/historial/HistorialView';

export const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <LoginView/> } />
            <Route path='/menu' element={ <AsistenciaView /> } />
            <Route path='/historial' element={ <HistorialView /> } />
        </Routes>
    </Router>
  )
}
