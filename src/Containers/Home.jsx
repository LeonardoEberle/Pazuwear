import { useNavigate } from 'react-router-dom'
import './Home.css'
import heroBannerImg from '../assets/banner-fundo-hero.png'
import { featuredProducts, popularProducts } from '../data/products'

function Home() {
  const navigate = useNavigate()

  return (
    <main className="home">
      <section className="hero" style={{ backgroundImage: `url(${heroBannerImg})` }}>
        <div className="hero-content">
          <p className="hero-tagline">Nova coleção Pazu Wearbeach disponivel</p>
          <h1>Moda praia sustentável para todos os dias de verão</h1>
          <p className="hero-text">
            Peças confortáveis, duráveis e pensadas para quem ama mar, areia e
            estilo. Combine biquínis, bodies e acessórios em uma experiência de
            compra simples e inspiradora.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Comprar agora</button>
            <button className="btn btn-outline" onClick={() => navigate('/sobre')}>
              Sobre nós
            </button>
          </div>
        </div>
        <div className="hero-banner">
          <span className="hero-pill">Coleção 2025</span>
          <p className="hero-highlight">Até 30% OFF em peças selecionadas</p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2>Destaques da semana</h2>
          <p>
            Seleção especial de produtos com foco em conforto, estilo e
            responsabilidade ambiental.
          </p>
        </div>

        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <article key={product.id} className="featured-card">
              <div className="featured-badge">{product.label}</div>
              <h3>{product.title}</h3>
              <p className="featured-price">{product.price}</p>
              <button className="btn btn-link">Ver produto</button>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2>Produtos populares</h2>
          <p>
            Itens que a comunidade Pazu Wearbeach mais ama. Perfeitos para
            montar seu guarda-roupa de praia.
          </p>
        </div>

        <div className="products-grid">
          {popularProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-placeholder" />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="btn btn-secondary">Adicionar ao carrinho</button>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section info-grid">
        <article className="info-card">
          <h2>Algo aqui</h2>
          <p>
            link para blog ou algo assim?
          </p>
        </article>

        <article className="info-card">
          <h2>Sobre a Pazu Wearbeach</h2>
          <p>
            rapida descrição sobre  aloja
          </p>
        </article>

        <article className="info-card">
          <h2>Newsletter</h2>
          <p>
            Receba novidades, lançamentos exclusivos e ofertas especiais direto
            no seu e-mail.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Seu e-mail" />
            <button className="btn btn-primary" type="submit">
              Quero receber
            </button>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Home
