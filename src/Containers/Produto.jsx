import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { featuredProducts } from '../data/products'
import heroImg from '../assets/catalogo-hero.png'
import './Produto.css'

const WHATSAPP_NUMBER = '13053019516'

function Produto() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = featuredProducts.find(p => p.id === Number(id))

  const [activeImg, setActiveImg] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  // { [piece]: quantity }  — piece only appears here if selected (qty >= 1)
  const [pieceQty, setPieceQty] = useState({})

  useEffect(() => {
    setActiveImg(0)
    setSelectedSize(null)
    setPieceQty({})
  }, [id])

  if (!product) {
    return (
      <main className="produto-page">
        <div className="produto-not-found">
          <h2>Product not found.</h2>
          <button className="btn btn-primary" onClick={() => navigate('/catalogo')}>Back to Catalog</button>
        </div>
      </main>
    )
  }

  const priceEntries = Object.entries(product.price)
  const hasPieceSelection = priceEntries.length > 1

  const handlePrev = () => setActiveImg(i => (i === 0 ? product.images.length - 1 : i - 1))
  const handleNext = () => setActiveImg(i => (i === product.images.length - 1 ? 0 : i + 1))

  // Toggle a piece on/off; when turning on, start at qty 1
  const togglePiece = (piece) => {
    setPieceQty(prev => {
      if (prev[piece]) {
        const next = { ...prev }
        delete next[piece]
        return next
      }
      return { ...prev, [piece]: 1 }
    })
  }

  const changeQty = (piece, delta) => {
    setPieceQty(prev => {
      const next = Math.max(1, (prev[piece] || 1) + delta)
      return { ...prev, [piece]: next }
    })
  }

  // For single-piece products (no selection), use a standalone qty counter
  const [singleQty, setSingleQty] = useState(1)

  const selectedPieces = Object.keys(pieceQty)
  const totalPrice = hasPieceSelection
    ? selectedPieces.reduce((sum, p) => sum + product.price[p] * pieceQty[p], 0)
    : priceEntries[0][1] * singleQty

  const canBuy =
    (product.sizes.length === 0 || selectedSize) &&
    (hasPieceSelection ? selectedPieces.length > 0 : true)

  const buildWhatsAppMessage = () => {
    let msg = `Hi! I'm interested in the *${product.collection}* collection.\n`
    if (hasPieceSelection) {
      selectedPieces.forEach(p => {
        msg += `• ${p} x${pieceQty[p]} — $${product.price[p] * pieceQty[p]}\n`
      })
    } else {
      msg += `• ${priceEntries[0][0]} x${singleQty} — $${priceEntries[0][1] * singleQty}\n`
    }
    if (selectedSize) msg += `Size: *${selectedSize}*\n`
    msg += `Total: *$${totalPrice}*\n\nCould you help me with the purchase?`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }

  return (
    <main className="produto-page">
      <section className="produto-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="produto-hero-content">
          <span className="produto-hero-tag">{product.category}</span>
        </div>
      </section>

      <div className="produto-container">

        {/* Gallery */}
        <div className="produto-gallery">
          <div className="gallery-thumbnails">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={`thumb-btn ${activeImg === i ? 'active' : ''}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={img} alt={`${product.collection} ${i + 1}`} />
              </button>
            ))}
          </div>

          <div className="gallery-main">
            <button className="gallery-arrow left" onClick={handlePrev} aria-label="Previous image">&#8249;</button>
            <img src={product.images[activeImg]} alt={product.collection} className="gallery-main-img" />
            <button className="gallery-arrow right" onClick={handleNext} aria-label="Next image">&#8250;</button>
            <div className="gallery-dots">
              {product.images.map((_, i) => (
                <span key={i} className={`dot ${activeImg === i ? 'active' : ''}`} onClick={() => setActiveImg(i)} />
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="produto-info">
          <span className="produto-category">{product.category}</span>
          <h1 className="produto-title">{product.collection}</h1>
          {product.label && <span className="produto-badge">{product.label}</span>}
          <p className="produto-description">{product.description}</p>

          {/* Multi-piece selection */}
          {hasPieceSelection && (
            <div className="produto-selection">
              <p className="selection-label">Select pieces:</p>
              <div className="piece-list">
                {priceEntries.map(([piece, price]) => {
                  const selected = !!pieceQty[piece]
                  return (
                    <div key={piece} className={`piece-row ${selected ? 'selected' : ''}`}>
                      <button className="piece-toggle" onClick={() => togglePiece(piece)}>
                        <span className="piece-check">{selected ? '✓' : ''}</span>
                        <span className="piece-name">{piece}</span>
                        <span className="piece-price">${price}</span>
                      </button>
                      {selected && (
                        <div className="qty-control">
                          <button className="qty-btn" onClick={() => changeQty(piece, -1)}>−</button>
                          <span className="qty-value">{pieceQty[piece]}</span>
                          <button className="qty-btn" onClick={() => changeQty(piece, +1)}>+</button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              {selectedPieces.length > 0 && (
                <p className="price-total">Total: <strong>${totalPrice}</strong></p>
              )}
            </div>
          )}

          {/* Single-piece product */}
          {!hasPieceSelection && (
            <div className="produto-selection">
              <p className="produto-price-single">${priceEntries[0][1]}</p>
              <div className="qty-row">
                <span className="selection-label">Quantity:</span>
                <div className="qty-control">
                  <button className="qty-btn" onClick={() => setSingleQty(q => Math.max(1, q - 1))}>−</button>
                  <span className="qty-value">{singleQty}</span>
                  <button className="qty-btn" onClick={() => setSingleQty(q => q + 1)}>+</button>
                </div>
                <span className="price-total">Total: <strong>${totalPrice}</strong></span>
              </div>
            </div>
          )}

          {/* Size selection */}
          {product.sizes.length > 0 && (
            <div className="produto-selection">
              <p className="selection-label">
                Select size: {selectedSize && <strong>{selectedSize}</strong>}
              </p>
              <div className="selection-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`option-btn size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {product.features.length > 0 && (
            <ul className="produto-features">
              {product.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}

          {/* CTA */}
          <a
            href={canBuy ? buildWhatsAppMessage() : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary buy-btn ${!canBuy ? 'disabled' : ''}`}
            onClick={e => { if (!canBuy) e.preventDefault() }}
          >
            Buy Now
          </a>
          {!canBuy && (
            <p className="buy-hint">
              {hasPieceSelection && selectedPieces.length === 0
                ? 'Please select at least one piece'
                : 'Please select a size'}
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

export default Produto
