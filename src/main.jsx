import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainRouter } from './MainRouter'
import { UserProvider } from './context/UserContext'
import { MqttProvider } from './context/MqttContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <MqttProvider>
        <MainRouter />
      </MqttProvider>
    </UserProvider>
  </React.StrictMode>,
)
