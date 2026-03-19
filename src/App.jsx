import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './Containers/Home'
import Catalogo from './Containers/Catalogo'
import Sobre from './Containers/Sobre'
import Contato from './Containers/Contato'
import Produto from './Containers/Produto'

function App() {
  const location = useLocation()
  const [pageReady, setPageReady] = useState(true)

  useEffect(() => {
    setPageReady(false)
    const id = requestAnimationFrame(() => setPageReady(true))
    return () => cancelAnimationFrame(id)
  }, [location.pathname])

  return (
    <div className="app">
      <div className="site-header">
        <Navbar />
      </div>
      <ScrollToTop />
      <div className={`page-wrapper ${pageReady ? 'page-enter' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produto/:id" element={<Produto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
