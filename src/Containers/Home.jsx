import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import heroBannerImg from '../assets/banner-fundo-hero.png'
import { featuredProducts } from '../data/products'

// Imagens para a seção About
import aboutImgLarge from '../assets/midhome-grande.png'
import aboutImgSmall1 from '../assets/midhome-peq-1.png'
import aboutImgSmall2 from '../assets/midhome-peq-2.png'

function Home() {
  const navigate = useNavigate()

  // Seleciona 4 produtos aleatórios com a tag 'highlight'
  const highlightedItems = useMemo(() => {
    if (!featuredProducts) return []
    
    // Filtra os produtos que possuem a tag 'highlight'
    const filtered = featuredProducts.filter(p => p.tags && p.tags.includes('highlight'))
    
    // Se não houver produtos com a tag, retorna vazio para não quebrar
    if (filtered.length === 0) return []

    // Embaralha a lista filtrada (Fisher-Yates shuffle simplificado)
    const shuffled = [...filtered].sort(() => 0.5 - Math.random())
    
    // Retorna no máximo 4 itens
    return shuffled.slice(0, 4)
  }, []) // Dependência vazia para rodar apenas uma vez ao carregar a página

  // Seleciona 4 produtos aleatórios de toda a lista para a seção "Other Products"
  const otherRandomProducts = useMemo(() => {
    if (!featuredProducts) return []
    
    // Embaralha toda a lista de produtos
    const shuffled = [...featuredProducts].sort(() => 0.5 - Math.random())
    
    // Retorna no máximo 4 itens
    return shuffled.slice(0, 4)
  }, []) // Dependência vazia para rodar apenas uma vez ao carregar a página

  return (
    <main className="home">
      <section className="hero" style={{ backgroundImage: `url(${heroBannerImg})` }}>
        <div className="hero-content">
          <p className="hero-tagline">New PAZÜ Swimwear collection available</p>
          <h1>Sustainable swimwear for every summer day</h1>
          <p className="hero-text">
            Comfortable, durable pieces designed for those who love the ocean, the sand, and 
            style. Mix and match bikinis, bodysuits, and accessories in a simple and 
            inspiring shopping experience.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate('/catalogo')}>Buy Now</button>
            <button className="btn btn-outline" onClick={() => navigate('/sobre')}>About Us</button>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2>Week Highlights</h2>
          <p>
            A special selection of this week's trending products.
          </p>
        </div>

        <div className="featured-grid">
          {highlightedItems.map((product) => (
            <article key={product.id} className="featured-card">
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
      </section>

      <section className="about-brand">
        <div className="about-header">
          <div className="about-header-inner">
            <h2>The perfect match between loving your body and the planet.</h2>
            <p>Born under the Brazilian sun, we blend vibrant style with sustainable practices.</p>
            <p>Our mission? To make you feel powerful, confident, and comfortable while doing good for the Earth.</p>
          </div>
        </div>
        <div className="about-gallery">
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

      <section className="home-section">
        <div className="section-header">
          <h2>Other products that you might like</h2>
          <p>
            Explore our complete collection of beachwear, crocheted items, and accessories.
          </p>
        </div>

        <div className="products-grid">
          {otherRandomProducts.map((product) => (
            <article key={product.id} className="product-card" onClick={() => navigate(`/produto/${product.id}`)}>
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
      </section>

      <section className="home-section info-grid">
        <article className="info-card">
          <h2>What makes us different?</h2>
          <ul>
            <li>Biodegradable Fabric</li>
            <li>Brazilian Style</li>
            <li>Reversible Pieces</li>
            <li>Made to Fit EveryBODY</li>
          </ul>
        </article>

        <article className="info-card">
          <h2>a little about PAZÜ</h2>
          <p>
            Founded by Julia and Naomi, PAZÜ was born from the fusion of Brazilian soul and a deep desire to transform swimwear. Our mission is to empower women through timeless designs that respect the planet. We believe the perfect match is loving your body and the Earth simultaneously.
          </p>
          <p>
            Look good, do good.
          </p>
        </article>

        <article className="info-card">
          <h2>Newsletter</h2>
          <p>
            Receive news, exclusive launches and special offers straight to your email.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Home
