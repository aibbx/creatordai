import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import DApp from './pages/DApp'
import { useEffect } from 'react'

function DeckRedirect() {
  useEffect(() => { window.location.href = 'https://creatordao.org/deck' }, [])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<DApp />} />
        <Route path="/deck" element={<DeckRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
