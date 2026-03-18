import './Sobre.css'
import heroImg from '../assets/sobre-hero.png'

function Sobre() {
  return (
    <main className="sobre-page">
      <section className="sobre-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="sobre-hero-content">
          <span className="sobre-hero-tag">About PAZÜ</span>
          <h1>Our Story & Mission</h1>
          <p>
            Driven by passion, inspired by nature, and committed to a more sustainable future for fashion.
          </p>
        </div>
      </section>

      <section className="sobre-content">
        <div className="container">
          <h2>Who we are</h2>
          <p>
            PAZÜ was born from the desire to create high-quality, sustainable swimwear that empowers women and protects the planet.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Sobre
