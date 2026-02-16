import { NavLink } from 'react-router-dom'
import logo from '../assets/PazuLogo.png'

function Navbar() {
  return (
    <nav className="navbar">
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
            <NavLink to="/catalogo">Catálogo</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
