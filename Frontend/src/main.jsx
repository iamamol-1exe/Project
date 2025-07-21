import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import DataContextProvider from './context/DataContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</DataContextProvider>
  </StrictMode>,
)
