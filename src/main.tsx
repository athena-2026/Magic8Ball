import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './Routes/PositiveNegative/App'
import Navbar from './Routes/Navbar'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element=""/>
      </Routes>

    </BrowserRouter>

  </StrictMode>,
)
