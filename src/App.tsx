import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Deck from './pages/Deck'
import DApp from './pages/DApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/app" element={<DApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
