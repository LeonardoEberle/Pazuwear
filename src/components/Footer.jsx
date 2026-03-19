import { Link } from 'react-router-dom'
import logo from '../assets/PazuLogo.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Pazü Wearbeach" />
          <p>Sustainable swimwear born under the Brazilian sun. The perfect match between loving your body and the planet.</p>
        </div>

        <nav className="footer-nav">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalogo">All Products</Link></li>
            <li><Link to="/sobre">About Us</Link></li>
            <li><Link to="/contato">FAQ / Contact</Link></li>
          </ul>
        </nav>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/pazubeachwear/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/13053019516" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="mailto:pazubeachwear@gmail.com">pazubeachwear@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Pazü Wearbeach &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
