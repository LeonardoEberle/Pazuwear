import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/PazuLogo.png'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen)
    return () => document.body.classList.remove('nav-menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const navClass = `navbar ${isScrolled ? 'scrolled' : 'transparent'}${menuOpen ? ' menu-open' : ''}`

  return (
    <nav className={navClass} aria-label="Main">
      {menuOpen ? (
        <button
          type="button"
          className="navbar-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}
      <div className="navbar-inner">
        <div className="navbar-logo">
          <NavLink to="/" end onClick={closeMenu}>
            <img src={logo} alt="Pazu Wearbeach" />
          </NavLink>
        </div>
        <button
          type="button"
          className="navbar-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="navbar-menu-icon" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>
        <ul id="primary-navigation" className="navbar-links">
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogo" onClick={closeMenu}>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" onClick={closeMenu}>
              FAQ / Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
