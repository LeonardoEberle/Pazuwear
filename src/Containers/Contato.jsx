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
              <p>We’re always checking these channels, so choose the one you feel most comfortable with, and we’ll be happy to help you choose the perfect design, size, and take care of your shipping logistics.</p>
              
              <div className="info-item">
                <h3>WhatsApp</h3>
                <p>305 301 9516</p>
              </div>

              <div className="info-item">
                <h3>Instagram DMs</h3>
                <p>@pazubeachwear</p>
              </div>

              <div className="info-item">
                <h3>Email</h3>
                <p>pazubeachwear@gmail.com</p>
              </div>
            </div>

            <div className="faq-container">
              <h2>Frequently Asked Questions</h2>
              
              <div className="faq-item">
                <h3>Where is Pazü based?</h3>
                <p>Miami - Florida, but we ship all over the world.</p>
              </div>

              <div className="faq-item">
                <h3>Do you have a physical store?</h3>
                <p>We don’t have a permanent in-person shop, but we frequently pop up at flea markets and events around Miami! Be sure to follow us on social media for updates on our next market dates and locations. We’d love to see you in person!</p>
              </div>

              <div className="faq-item">
                <h3>Do you offer pick-up or local delivery in Miami?</h3>
                <p>Yes, if you’re in Miami, we’d love to make things even easier for you! We offer local pickup or drop-off services. Just reach out to us to schedule a convenient time, and we’ll make sure your pieces are delivered to you with love.</p>
              </div>

              <div className="faq-item">
                <h3>Do you only sell the full bikini sets?</h3>
                <p>You can purchase the complete bikini set or mix and match separate tops and bottoms to find your perfect fit. Want a small top and medium bottom? No problem, we’ve got you covered.</p>
              </div>

              <div className="faq-item">
                <h3>How do I take care of my piece?</h3>
                <div className="faq-subcontent">
                  <h4>Wash after every use</h4>
                  <p>It is important to wash your swimwear after each use even if you didn't go in the water. The sun, sand, sunscreen, and your body natural oils can still wear down your bikini.</p>
                  
                  <h4>Hand wash your pieces</h4>
                  <p>Do not wash your swimwear in the washing machine. Handwashing your bikinis preserves the integrity of the stretchy fabric, and it also guarantees that the bacteria that live in your machine don't get to your skin. Using a sensitive soap will help preserve color and feel, and is also healthier for your skin and health.</p>
                  
                  <h4>Let your bikinis air dry</h4>
                  <p>It is also important not to let them dry in direct contact with sunlight since it can damage the fabric. The heat from the dryer can damage the color and also compromise the delicate fabric of your piece.</p>
                </div>
              </div>

              <div className="faq-item">
                <h3>How do I track my order?</h3>
                <p>If you're ordering from outside Miami, don’t worry! We’ll ship your order to you and provide you with a tracking number as soon as your package is on its way. You’ll be able to follow your order’s journey until it reaches you.</p>
              </div>
            </div>
          </div>

          <div className="policy-section">
            <h2>Return Policy</h2>
            <p className="policy-intro">We want you to be absolutely in love with your new beachwear! But we understand that returns might be necessary sometimes. Here’s how we make returns smooth and easy:</p>
            
            <div className="policy-grid">
              <div className="policy-card">
                <h3>Eligibility</h3>
                <ul>
                  <li>You can return items within 15 days of your purchase.</li>
                  <li>The item must be unused, unworn, unwashed, and in its original condition.</li>
                  <li>The item should show no signs of damage from misuse, neglect, or improper care.</li>
                </ul>
              </div>

              <div className="policy-card">
                <h3>Fabrication Issues</h3>
                <p>If you find any issues related to the fabrication (like defects in the material or stitching), please contact us immediately. We'll work with you to resolve the issue with either an exchange, refund, or store credit, depending on your preference.</p>
              </div>

              <div className="policy-card">
                <h3>Return Process</h3>
                <ol>
                  <li>Reach out to us within 15 days of receiving your order via email at <strong>pazubeachwear@gmail.com</strong>. Let us know your order details and the reason for the return.</li>
                  <li>Our team will guide you through the next steps and provide you with any necessary instructions.</li>
                  <li>Package the item securely, ensuring it's in its original condition.</li>
                  <li>Ship it back to us using a trackable service. Don’t forget to keep your shipping proof for reference.</li>
                  <li>Once we receive the item and verify it meets our return criteria, we’ll process your refund, exchange, or store credit quickly!</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="contato-footer">
            <h2>Have any more questions or concerns?</h2>
            <p>We are here to help! Reach us at <strong>pazubeachwear@gmail.com</strong> / phone number: <strong>305 301 9516</strong> / or send us a DM on our Instagram page (<strong>@pazubeachwear</strong>).</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contato
