import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ResourceProvider } from './context/resource.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ResourceProvider>
    <App />
  </ResourceProvider>
)
