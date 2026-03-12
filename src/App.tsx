import { useState } from 'react'
import './App.css'

function App() {
  const [modalState, setModalState] = useState<{ isOpen: boolean, type: 'buy' | 'sell', market: string, rate: string, min: string, max: string, time: string, color: string, abbrev: string }>({
    isOpen: false,
    type: 'buy',
    market: '',
    rate: '',
    min: '',
    max: '',
    time: '',
    color: '',
    abbrev: ''
  });

  const [amount, setAmount] = useState('');

  const openModal = (type: 'buy' | 'sell', market: string, rate: string, min: string, max: string, time: string, color: string, abbrev: string) => {
    setModalState({ isOpen: true, type, market, rate, min, max, time, color, abbrev });
    setAmount('');
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 24V8H22C24.2091 8 26 9.79086 26 12C26 14.2091 24.2091 16 22 16H14L22 24" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <nav className="main-nav">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Transactions</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">App</a>
            <a href="#" className="nav-link">Support</a>
          </nav>
          <div className="auth-buttons">
            <button className="btn btn-ghost">Log in</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </header>
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-inner">
            <h1 className="hero-title">Welcome to Rates.LK</h1>
            <p className="hero-subtitle">Sri Lanka's most trusted digital currency exchange platform. Experience seamless, secure transactions with competitive rates and professional service.</p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎧</div>
                <h3 className="feature-title">24/7 Support</h3>
                <p className="feature-text">Round-the-clock professional assistance from our expert team</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3 className="feature-title">Verified Partners</h3>
                <p className="feature-text">Trusted and verified sellers ensuring secure transactions</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Instant Transactions</h3>
                <p className="feature-text">Fast, secure digital exchanges with real-time processing</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3 className="feature-title">Best Rates</h3>
                <p className="feature-text">Competitive exchange rates updated live from central bank</p>
              </div>
            </div>
          </div>
        </section>

        {/* Central Bank Rates */}
        <section className="rates-section container">
          <h2 className="section-title">Central Bank Rates</h2>
          <div className="rates-grid">
            <div className="rate-card mini-card">
              <div className="card-header">
                <div className="currency-info">
                  <div className="flag">🇺🇸</div>
                  <div>
                    <strong>USD</strong>
                    <span>US Dollar</span>
                  </div>
                </div>
              </div>
              <div className="rate-details">
                <div className="rate-row">
                  <span className="rate-label">Buying</span>
                  <span className="rate-value success">307.1870</span>
                </div>
                <div className="rate-row">
                  <span className="rate-label">Selling</span>
                  <span className="rate-value danger">314.8630</span>
                </div>
              </div>
            </div>
            {/* ... other mini cards ... */}
          </div>
        </section>

        {/* Available Markets */}
        <section className="markets-section container">
          <h2 className="section-title">Available Markets</h2>
          <div className="markets-grid">
            {/* Tether Card */}
            <div className="market-card">
              <div className="market-header">
                <div className="market-title">
                  <div className="market-logo tether">₮</div>
                  <div className="market-name">
                    <strong>Tether +</strong> <span className="status-dot online"></span>
                  </div>
                </div>
                <div className="market-badges">
                  <span className="badge badge-blue">Crypto</span>
                  <span className="badge badge-time">🕒 3min</span>
                </div>
              </div>
              <div className="market-rates">
                <div className="rate-row">
                  <span className="rate-label">↗ Buy Rate</span>
                  <span className="rate-value success large">313.00</span>
                </div>
                <div className="rate-row">
                  <span className="rate-label">↘ Sell Rate</span>
                  <span className="rate-value danger large">310.00</span>
                </div>
              </div>
              <div className="market-limits">
                <div className="limit-row">
                  <span>Min Amount:</span>
                  <span>100</span>
                </div>
                <div className="limit-row">
                  <span>Max Amount:</span>
                  <span>5,000</span>
                </div>
              </div>
              <div className="market-actions">
                <button className="btn btn-block btn-buy">↗ Buy</button>
                <button className="btn btn-block btn-sell-outline">↘ Sell</button>
              </div>
            </div>
            {/* Skrill Card */}
            <div className="market-card">
              <div className="market-header">
                <div className="market-title">
                  <div className="market-logo" style={{ backgroundColor: '#8b0a50' }}>S</div>
                  <div className="market-name">
                    <strong>Skrill</strong> <span className="status-dot online"></span>
                  </div>
                </div>
                <div className="market-badges">
                  <span className="badge badge-blue" style={{ color: '#8b0a50', backgroundColor: 'rgba(139, 10, 80, 0.1)' }}>Virtual Wallet</span>
                  <span className="badge badge-time">🕒 2min</span>
                </div>
              </div>
              <div className="market-rates">
                <div className="rate-row">
                  <span className="rate-label">↗ Buy Rate</span>
                  <span className="rate-value success large">317.00</span>
                </div>
                <div className="rate-row">
                  <span className="rate-label">↘ Sell Rate</span>
                  <span className="rate-value danger large">297.00</span>
                </div>
              </div>
              <div className="market-limits">
                <div className="limit-row">
                  <span>Min Amount:</span>
                  <span>100</span>
                </div>
                <div className="limit-row">
                  <span>Max Amount:</span>
                  <span>5,000</span>
                </div>
              </div>
              <div className="market-actions">
                <button className="btn btn-block btn-buy">↗ Buy</button>
                <button className="btn btn-block btn-sell-outline">↘ Sell</button>
              </div>
            </div>

            {/* Wise Card */}
            <div className="market-card">
              <div className="market-header">
                <div className="market-title">
                  <div className="market-logo" style={{ backgroundColor: '#00b9ff' }}>W</div>
                  <div className="market-name">
                    <strong>Wise</strong> <span className="status-dot online"></span>
                  </div>
                </div>
                <div className="market-badges">
                  <span className="badge badge-blue" style={{ color: '#00b9ff', backgroundColor: 'rgba(0, 185, 255, 0.1)' }}>Virtual Wallet</span>
                  <span className="badge badge-time">🕒 3min</span>
                </div>
              </div>
              <div className="market-rates">
                <div className="rate-row">
                  <span className="rate-label">↗ Buy Rate</span>
                  <span className="rate-value success large">319.00</span>
                </div>
                <div className="rate-row">
                  <span className="rate-label">↘ Sell Rate</span>
                  <span className="rate-value danger large">309.00</span>
                </div>
              </div>
              <div className="market-limits">
                <div className="limit-row">
                  <span>Min Amount:</span>
                  <span>50</span>
                </div>
                <div className="limit-row">
                  <span>Max Amount:</span>
                  <span>5,000</span>
                </div>
              </div>
              <div className="market-actions">
                <button className="btn btn-block btn-buy">↗ Buy</button>
                <button className="btn btn-block btn-sell-outline">↘ Sell</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-col">
            <h3 className="footer-title">Rates.LK</h3>
            <p className="footer-desc">Sri Lanka's leading digital currency exchange platform.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-subtitle">Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Transactions</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-subtitle">Support</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Rates.LK. All rights reserved.</p>
        </div>
      </footer>

      {/* Buy/Sell Modal */}
      {modalState.isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <div className="market-logo" style={{ backgroundColor: modalState.color, width: 32, height: 32, fontSize: '1rem' }}>
                  {modalState.abbrev}
                </div>
                <div className="modal-title-text">
                  <h3>{modalState.type === 'buy' ? 'Buy' : 'Sell'} {modalState.market}</h3>
                  <span>{modalState.market === 'Tether +' ? 'USDT' : modalState.market}</span>
                </div>
              </div>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>

            <div className="modal-body">
              <div className="modal-rate-info">
                <div className="rate-main">
                  <span className={`rate-icon ${modalState.type === 'buy' ? 'success' : 'danger'}`}>
                    {modalState.type === 'buy' ? '↗' : '↘'}
                  </span>
                  <span className="rate-text">{modalState.type === 'buy' ? 'Buy Rate' : 'Sell Rate'}</span>
                  <span className={`rate-value-large ${modalState.type === 'buy' ? 'success' : 'danger'}`}>
                    ${modalState.rate}
                  </span>
                </div>
                <div className="rate-meta">
                  <span>🕒 Transfer Time: {modalState.time}</span>
                  <span className="badge badge-time">crypto</span>
                </div>
              </div>

              <div className="modal-grey-box">
                <div className="input-mode-toggle">
                  <span className="toggle-icon">⇆</span>
                  <div className="toggle-text">
                    <strong>Input Mode</strong>
                    <span>Enter amount in {modalState.market === 'Tether +' ? 'USDT' : modalState.market}</span>
                  </div>
                  <div className="toggle-switch">
                    <input type="checkbox" id="mode-toggle" />
                    <label htmlFor="mode-toggle"></label>
                  </div>
                </div>

                <div className="transaction-summary">
                  <div className="summary-header">
                    <span className="summary-icon">🖩</span>
                    <strong>Transaction Summary</strong>
                  </div>
                  <div className="summary-row">
                    <span>{modalState.type === 'buy' ? 'You Pay:' : 'You Sell:'}</span>
                    <span className="summary-value dim">Enter amount</span>
                  </div>
                  <div className="summary-row">
                    <span>You Receive:</span>
                    <span className="summary-value dim">Enter amount</span>
                  </div>
                </div>
              </div>

              <div className="modal-input-group">
                <label>Amount to {modalState.type === 'buy' ? 'Buy' : 'Sell'} ({modalState.market === 'Tether +' ? 'USDT' : modalState.market})</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
                <div className="input-limits">
                  <span>Min: {modalState.min}</span>
                  <span>Max: {modalState.max}</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-cancel" onClick={closeModal}>Cancel</button>
              <button className={`btn btn-confirm ${modalState.type === 'buy' ? 'btn-confirm-buy' : 'btn-confirm-sell'}`}>
                {modalState.type === 'buy' ? '↗ Confirm Buy' : '↘ Confirm Sell'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
