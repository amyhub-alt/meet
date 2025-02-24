import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as atatus from 'atatus-spa';
import './index.css'

atatus.config('2be7e6c639034ad1a65beef79c4ce15c').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

