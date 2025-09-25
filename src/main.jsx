/**
 * File: src/main.jsx
 * Role: React entrypoint
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Global styles
import './index.css'
import './styles/reusable.css'

import App from './App.jsx'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
)
