import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Image from './Image'
import QuestionHandler from './Question'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Image/>
    <QuestionHandler/>
  </StrictMode>,
)
