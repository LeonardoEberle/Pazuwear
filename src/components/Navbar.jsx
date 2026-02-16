import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
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
        <li>
          <NavLink to="/produto">Produto</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
