import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Edition1 from './Routes/PositiveNegative/Edition1'
import App from './Routes/Original/App'
import Navbar from './Routes/Navbar'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/edition1" element={<Edition1 />}/>
      </Routes>

    </BrowserRouter>

  </StrictMode>,
)
