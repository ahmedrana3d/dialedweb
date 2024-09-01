import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import Contact from './Contact'

createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <App />
    </Router>
  </>
)

