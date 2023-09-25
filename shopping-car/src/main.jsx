import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'
import { DevelopmentProvider } from './context/development.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DevelopmentProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </DevelopmentProvider>
)
