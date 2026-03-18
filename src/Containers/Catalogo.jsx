import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import './Catalogo.css'
import { featuredProducts } from '../data/products'
import heroImg from '../assets/catalogo-hero.png'

function Catalogo() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('beachwear')

  // Filtra os produtos para cada categoria
  const beachwearProducts = useMemo(() => 
    featuredProducts.filter(p => p.category === 'beachwear'), [])
  
  const crochetProducts = useMemo(() => 
    featuredProducts.filter(p => p.category === 'crochet'), [])
  
  const accessoriesProducts = useMemo(() => 
    featuredProducts.filter(p => p.category === 'accessories'), [])

  return (
    <main className="catalogo-page">
      <section className="catalogo-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="catalogo-hero-content">
          <span className="catalogo-hero-tag">Full Collection</span>
          <h1>All Products</h1>
          <p>
            Explore our complete range of sustainable beachwear, handmade crochet, and eco-friendly accessories.
          </p>
        </div>
      </section>

      <section className="catalogo-content">
        <div className="container">
          <div className="category-filters">
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
            {/* Div Beachwear */}
            <div className={`category-grid-view ${activeCategory === 'beachwear' ? 'visible' : ''}`}>
              <div className="products-grid">
                {beachwearProducts.map((product) => (
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
            </div>

            {/* Div Crochet */}
            <div className={`category-grid-view ${activeCategory === 'crochet' ? 'visible' : ''}`}>
              <div className="products-grid">
                {crochetProducts.map((product) => (
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
            </div>

            {/* Div Accessories */}
            <div className={`category-grid-view ${activeCategory === 'accessories' ? 'visible' : ''}`}>
              <div className="products-grid">
                {accessoriesProducts.map((product) => (
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
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Catalogo
