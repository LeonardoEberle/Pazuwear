import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import heroBannerImg from '../assets/background-hero-new.png'
import { featuredProducts } from '../data/products'
import { useScrollReveal } from '../hooks/useScrollReveal'

import aboutImgLarge from '../assets/midhome-grande.png'
import aboutImgSmall1 from '../assets/midhome-peq-1.png'
import aboutImgSmall2 from '../assets/midhome-peq-2.png'

function Home() {
  const navigate = useNavigate()

  const highlightsRef = useScrollReveal({ stagger: 0.08 })
  const aboutRef = useScrollReveal({ stagger: 0 })
  const productsRef = useScrollReveal({ stagger: 0.08 })
  const infoRef = useScrollReveal({ stagger: 0.1 })

  const highlightedItems = useMemo(() => {
    if (!featuredProducts) return []
    const filtered = featuredProducts.filter(p => p.tags && p.tags.includes('highlight'))
    if (filtered.length === 0) return []
    const shuffled = [...filtered].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 4)
  }, [])

  const otherRandomProducts = useMemo(() => {
    if (!featuredProducts) return []
    const shuffled = [...featuredProducts].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 4)
  }, [])

  return (
    <main className="home">
      <section className="page-hero" style={{ backgroundImage: `url(${heroBannerImg})` }} />
{/* 
      <section className="home-section" ref={highlightsRef}>
        <div className="section-header reveal">
          <h2>Week Highlights</h2>
          <p>A special selection of this week's trending products.</p>
        </div>

        <div className="featured-grid">
          {highlightedItems.map((product) => (
            <article key={product.id} className="featured-card reveal">
              <div className="featured-image-wrapper">
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.collection} className="featured-image" />
                ) : (
                  <div className="product-image-placeholder" />
                )}
                <div className="featured-badge">{product.label}</div>
              </div>
              <div className="featured-info">
                <h3>{product.collection}</h3>
                <p className="featured-price">
                  {product.price && typeof product.price === 'object'
                    ? `Starting at $ ${Math.min(...Object.values(product.price).filter(v => typeof v === 'number'))}`
                    : `$ ${product.price}`}
                </p>
                <button className="btn btn-secondary" onClick={() => navigate(`/produto/${product.id}`)}>
                  View Product
                </button>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      <section className="about-brand" ref={aboutRef}>
        <div className="about-header">
          <div className="about-header-inner reveal">
            <h2>The perfect match between loving your body and the planet.</h2>
            <p>Born under the Brazilian sun, we blend vibrant style with sustainable practices.</p>
            <p>Our mission? To make you feel powerful, confident, and comfortable while doing good for the Earth.</p>
          </div>
        </div>
        <div className="about-gallery reveal">
          <div className="gallery-left">
            <div className="gallery-small-item">
              <img src={aboutImgSmall1} alt="Sustainability Details" />
            </div>
            <div className="gallery-small-item">
              <img src={aboutImgSmall2} alt="Sustainable Beachwear" />
            </div>
          </div>
          <div className="gallery-right">
            <div className="gallery-large-item">
              <img src={aboutImgLarge} alt="PAZÜ Brand Mission" />
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="home-section" ref={productsRef}>
        <div className="section-header reveal">
          <h2>Other products that you might like</h2>
          <p>Explore our complete collection of beachwear, crocheted items, and accessories.</p>
        </div>

        <div className="products-grid">
          {otherRandomProducts.map((product) => (
            <article key={product.id} className="product-card reveal" onClick={() => navigate(`/produto/${product.id}`)}>
              <div className="product-image-wrapper">
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.collection} className="product-image" />
                ) : (
                  <div className="product-image-placeholder" />
                )}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.collection}</h3>
                <p className="product-price">
                  {product.price && typeof product.price === 'object'
                    ? `$ ${Object.values(product.price).join(' / ')}`
                    : `$ ${product.price}`}
                </p>
                <button className="btn btn-secondary">View Product</button>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      <section className="home-section info-grid" ref={infoRef}>
        <article className="info-card reveal">
          <h2>What makes us different?</h2>
          <ul>
            <li>Biodegradable Fabric</li>
            <li>Brazilian Style</li>
            <li>Reversible Pieces</li>
            <li>Made to Fit EveryBODY</li>
          </ul>
        </article>

        <article className="info-card reveal">
          <h2>a little about PAZÜ</h2>
          <p>
            Founded by Julia and Naomi, PAZÜ was born from the fusion of Brazilian soul and a deep desire to transform swimwear. Our mission is to empower women through timeless designs that respect the planet. We believe the perfect match is loving your body and the Earth simultaneously.
          </p>
          <p>Look good, do good.</p>
        </article>

        <article className="info-card reveal">
          <h2>Newsletter</h2>
          <p>Receive news, exclusive launches and special offers straight to your email.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button className="btn btn-primary" type="submit">Sign Up</button>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Home
