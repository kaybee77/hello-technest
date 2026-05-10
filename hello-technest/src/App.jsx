import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <span className="mark" aria-hidden="true">
          TN
        </span>
        <p className="eyebrow">Technest · Week 1</p>
        <h1>Hello, I&apos;m building here.</h1>
        <p className="lede">
          A tiny personal landing page: Vite and React for fast local dev, a
          static build that drops straight onto the edge, and room to grow if
          this page ever needs more than a hello.
        </p>
        <div className="actions">
          <a
            className="btn primary"
            href="https://github.com/kaybee77"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="btn ghost" href="mailto:hello@example.com">
            Email
          </a>
        </div>
      </header>

      <footer className="footer">
        <p>
          Shipped with{' '}
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            Vite
          </a>{' '}
          +{' '}
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            React
          </a>
          .
        </p>
      </footer>
    </div>
  )
}

export default App
