import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import './Catalogo.css'
import { featuredProducts } from '../data/products'
import heroImg from '../assets/background-hero-new.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Catalogo() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('beachwear')
  const gridRef = useScrollReveal({ stagger: 0.06 })

  const beachwearProducts = useMemo(() =>
    featuredProducts.filter(p => p.category === 'beachwear'), [])

  const crochetProducts = useMemo(() =>
    featuredProducts.filter(p => p.category === 'crochet'), [])

  const accessoriesProducts = useMemo(() =>
    featuredProducts.filter(p => p.category === 'accessories'), [])

  const renderGrid = (products) => (
    <div className="products-grid">
      {products.map((product) => (
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
  )

  return (
    <main className="catalogo-page">
      <section className="page-hero" style={{ backgroundImage: `url(${heroImg})` }} />

      <section className="catalogo-content" ref={gridRef}>
        <div className="container">
          <div className="category-filters reveal">
            <button
              className={`filter-btn ${activeCategory === 'beachwear' ? 'active' : ''}`}
              onClick={() => setActiveCategory('beachwear')}
            >
              Beachwear
            </button>
            <button
              className={`filter-btn ${activeCategory === 'crochet' ? 'active' : ''}`}
              onClick={() => setActiveCategory('crochet')}
            >
              Crochet
            </button>
            <button
              className={`filter-btn ${activeCategory === 'accessories' ? 'active' : ''}`}
              onClick={() => setActiveCategory('accessories')}
            >
              Accessories
            </button>
          </div>

          <div className="category-grids-container">
            <div className={`category-grid-view ${activeCategory === 'beachwear' ? 'visible' : ''}`}>
              {renderGrid(beachwearProducts)}
            </div>

            <div className={`category-grid-view ${activeCategory === 'crochet' ? 'visible' : ''}`}>
              {renderGrid(crochetProducts)}
            </div>

            <div className={`category-grid-view ${activeCategory === 'accessories' ? 'visible' : ''}`}>
              {renderGrid(accessoriesProducts)}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Catalogo
