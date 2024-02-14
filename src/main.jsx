import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainRouter } from './MainRouter'
import { UserProvider } from './context/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <MainRouter />
    </UserProvider>
  </React.StrictMode>,
)
