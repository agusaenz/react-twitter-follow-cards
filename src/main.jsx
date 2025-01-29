// import { createRoot } from 'react-dom/client'
// import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
