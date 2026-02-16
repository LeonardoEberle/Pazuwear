import './Home.css'

const featuredProducts = [
  {
    id: 1,
    label: 'Eco friendly',
    title: 'Biquíni em fibra reciclada',
    price: 'R$ 299',
  },
  {
    id: 2,
    label: 'Nova coleção',
    title: 'Kit saída de praia',
    price: 'R$ 489',
  },
  {
    id: 3,
    label: 'Best seller',
    title: 'Maiô costas abertas',
    price: 'R$ 954',
  },
  {
    id: 4,
    label: 'Essenciais',
    title: 'Top + bottom liso',
    price: 'R$ 99',
  },
]

const popularProducts = [
  {
    id: 1,
    name: 'Chapéu de palha',
    price: 'R$ 149',
  },
  {
    id: 2,
    name: 'Bolsa praia eco',
    price: 'R$ 199',
  },
  {
    id: 3,
    name: 'Saída de praia leve',
    price: 'R$ 259',
  },
  {
    id: 4,
    name: 'Sandália conforto',
    price: 'R$ 189',
  },
  {
    id: 5,
    name: 'Óculos de sol retro',
    price: 'R$ 229',
  },
  {
    id: 6,
    name: 'Canga estampada',
    price: 'R$ 129',
  },
  {
    id: 7,
    name: 'Biquíni listrado',
    price: 'R$ 299',
  },
  {
    id: 8,
    name: 'Body beachwear',
    price: 'R$ 349',
  },
]

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tagline">Nova coleção Pazu Wearbeach</p>
          <h1>Moda praia sustentável para todos os dias de verão</h1>
          <p className="hero-text">
            Peças confortáveis, duráveis e pensadas para quem ama mar, areia e
            estilo. Combine biquínis, bodies e acessórios em uma experiência de
            compra simples e inspiradora.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Comprar agora</button>
            <button className="btn btn-outline">Ver catálogo</button>
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
