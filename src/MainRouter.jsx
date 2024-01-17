import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginView } from './login/LoginView';


export const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <LoginView/> } />
        </Routes>
    </Router>
  )
}
