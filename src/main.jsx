import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { api } from './apiSlice'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider api={api}>
    <App />
    </ApiProvider>
  </StrictMode>,
)
