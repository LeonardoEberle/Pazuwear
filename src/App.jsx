import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Containers/Home'
import Catalogo from './Containers/Catalogo'
import Sobre from './Containers/Sobre'
import Contato from './Containers/Contato'
import Produto from './Containers/Produto'

function App() {
  return (
    <div className="app">
      <div className="site-header">
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
