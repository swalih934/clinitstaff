import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
   <StrictMode>
 <BrowserRouter>
    <ThemeProvider>
    <App />

    </ThemeProvider>

    </BrowserRouter>
      </StrictMode>,
)
