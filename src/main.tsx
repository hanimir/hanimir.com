import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

const params = new URLSearchParams(window.location.search)
const redirectedPath = params.get('p')

if (redirectedPath) {
  const nextPath = redirectedPath.startsWith('/') ? redirectedPath : `/${redirectedPath}`
  window.history.replaceState(null, '', nextPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
