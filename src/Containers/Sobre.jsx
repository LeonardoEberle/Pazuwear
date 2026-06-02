import './Sobre.css'
import heroImg from '../assets/background-hero-new.png'
import whoImg from '../assets/sobre-1.png'
import sustImg1 from '../assets/sobre-2.png'
import sustImg2 from '../assets/sobre-3.png'
import designImg from '../assets/sobre-4.png'
import productionImg from '../assets/sobre-5.png'
import packagingImg from '../assets/sobre-6.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Sobre() {
  const whoRef = useScrollReveal({ stagger: 0 })
  const sustRef = useScrollReveal({ stagger: 0 })
  const ethicsRef = useScrollReveal({ stagger: 0.1 })

  return (
    <main className="sobre-page">
      <section className="page-hero" style={{ backgroundImage: `url(${heroImg})` }} />

      <section className="sobre-section who-we-are" ref={whoRef}>
        <div className="sobre-container">
          <div className="who-text reveal">
            <h2>Who Are We?</h2>
            <p>Meet Julia and Naomi, co-owners of PAZU! We are both born and raised in Brazil, and currently living and studying in Miami, FL.</p>
            <p>The last few years have brought vast changes to the way we see things. Life has made us reexamine our priorities and relationships with everything and everyone, including the planet and ourselves. PAZU was born after a special talk about values and dreams, when we found out that we have the common goal to make all women feel confident and comfortable in any bikini while also being eco-friendly and not harming the environment. We wanted to create the perfect match between loving your body and the planet; that's how our brand came to life.</p>
            <p>It's not a surprise that the way we humans are treating the Earth and its resources is extremely dangerous. It's time to take action, it doesn't matter how simple or small, it is already a step forward.</p>
            <p>We have hope and want to be part of the change, will you join us?</p>
          </div>
          <div className="who-image reveal">
            <img src={whoImg} alt="Julia and Naomi, co-owners of PAZÜ" />
          </div>
        </div>
      </section>

      <section className="sobre-section sustainability" ref={sustRef}>
        <div className="sobre-container sust-layout">
          <div className="sust-images reveal">
            <img src={sustImg1} alt="Ocean water" />
            <img src={sustImg2} alt="Amni Soul Eco fabric tag" />
          </div>
          <div className="sust-text reveal">
            <h2>Our Sustainability Commitment</h2>
            <p>We want you to look good while doing good. From design to production and packaging, taking care of the planet is close to our hearts. It is our personal goal to leave the lightest possible ecological footprint on Earth, and we are looking for people who wish to do the same. Our bikinis are made of a biodegradable fabric that uses a technology called Amni Soul Eco, the first biodegradable polyamide developed in Brazil.</p>
            <p>Different from traditional fabrics that take decades to decompose, after being correctly thrown away, this technology allows your bikini to deteriorate 50% in the first year and completely disintegrate in the next 3 years. That's more than 10x faster than a regular piece! And don't worry, this does not affect the durability of our products; you can perfectly use and enjoy your piece for years, since the decomposition process only starts once the fabric encounters the landfill environment (after being discarded).</p>
            <p>And there is more! The fabric also features:</p>
            <ul className="sust-features">
              <li><strong>SPF 50+</strong></li>
              <li><strong>Oeko-Tex® Classe I e II International Certification</strong> — meaning there are no toxins that could be harmful to our skin in its composition;</li>
              <li><strong>CO2 Control Certification</strong> — during the production process, the least possible amount of CO2 gas is released into the atmosphere;</li>
              <li><strong>Sabesp Water Reuse Certification</strong></li>
              <li><strong>Permanent Odor Control Certification</strong> — a technology that restrains the spread of bacteria and odor in your piece.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sobre-section ethics" ref={ethicsRef}>
        <div className="sobre-container ethics-layout">
          <p className="ethics-intro reveal">We are also committed to be ethically conscious in our choices besides the fabric:</p>
          <div className="ethics-grid">
            <article className="ethics-card reveal">
              <img src={designImg} alt="Reversible bikini design" />
              <h3>Design</h3>
              <p><em>Reversible pieces!</em></p>
              <p>We know that the most sustainable closet is the one with few but smart pieces that can be styled in different ways. With that in mind, we prioritize classic and atemporal designs, and most of our pieces are reversible (4 in 1).</p>
            </article>
            <article className="ethics-card reveal">
              <img src={productionImg} alt="Handmade production in Brazil" />
              <h3>Production</h3>
              <p>In order to support our culture and bring the Brazilian magic to our pieces, our beachwear is handmade by women in Brazil. In addition, generating the least possible amount of waste is also in our ethos, that's why our deadstock fabric is used to make beautiful scrunchies.</p>
            </article>
            <article className="ethics-card reveal">
              <img src={packagingImg} alt="Eco-friendly packaging" />
              <h3>Packaging</h3>
              <p>You will get your piece in a 100% cotton bag that can be reused numerous times and it's perfect not only to store your bikini but anything else you might want. Plus, all our cards, stickers, and tags are FSC Certified, made with recycled paper, and recyclable.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Sobre
