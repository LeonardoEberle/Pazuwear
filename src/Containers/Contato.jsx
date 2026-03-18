import './Contato.css'
import heroImg from '../assets/contato-hero.png'

function Contato() {
  return (
    <main className="contato-page">
      <section className="contato-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="contato-hero-content">
          <span className="contato-hero-tag">Get in touch</span>
          <h1>Contact Us</h1>
          <p>
            Have any questions or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="contato-content">
        <div className="container">
          <div className="contato-grid">
            <div className="contato-info">
              <h2>Let's Talk</h2>
              <p>For any inquiries, collaborations, or customer support, please contact us through the following channels:</p>
              
              <div className="info-item">
                <h3>Email</h3>
                <p>pazuwearbeach@gmail.com</p>
              </div>

              <div className="info-item">
                <h3>Instagram</h3>
                <p>@pazuwearbeach</p>
              </div>

              <div className="info-item">
                <h3>Made in</h3>
                <p>Brazil</p>
              </div>
            </div>

            <div className="contato-form-container">
              <h2>Send us a Message</h2>
              <form className="contato-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contato
