import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/PazuLogo.png'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <NavLink to="/" end>
            <img src={logo} alt="Pazu Wearbeach" />
          </NavLink>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogo">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contato">FAQ / Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
