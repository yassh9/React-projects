import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import D from './D.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <D />
  </StrictMode>
)
