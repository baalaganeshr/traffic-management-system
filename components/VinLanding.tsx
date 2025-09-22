import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VinLanding: React.FC = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleDemoClick = () => {
    navigate('/dashboard');
  };

  // Cursor glow animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById('cursor-glow');
      if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="vin-landing">
      {/* Cursor glow effect */}
      <div 
        id="cursor-glow" 
        className="cursor-glow"
        style={{
          position: 'fixed',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(79, 70, 229, 0.1) 30%, transparent 70%)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease',
          zIndex: 1,
        }}
      />

      <style>{`
        /* VIN Landing Page Styles */
        .vin-landing {
          font-family: system-ui, -apple-system, sans-serif;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          color: #fff;
          min-height: 100vh;
          line-height: 1.6;
          position: relative;
          overflow-x: hidden;
        }

        .cursor-glow:hover {
          opacity: 0.8;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        .brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          background: linear-gradient(135deg, #fff, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav__links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav__links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
        }

        .nav__links a:hover {
          color: #fff;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: none;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn--primary {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
        }

        .btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
        }

        .btn--ghost {
          background: transparent;
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn--ghost:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.4);
        }

        .hero {
          padding: 120px 0 80px;
          text-align: left;
          position: relative;
        }

        .hero__inner {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          align-items: center;
        }

        .hero__main {
          text-align: left;
        }

        .eyebrow {
          color: #7c3aed;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: slideInUp 0.8s ease-out forwards;
        }

        .hero h1 {
          font-size: 3.8rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          animation: slideInUp 0.8s ease-out 0.2s forwards;
        }

        .hero__lead {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          max-width: 600px;
          opacity: 0;
          animation: slideInUp 0.8s ease-out 0.4s forwards;
        }

        .hero__actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          opacity: 0;
          animation: slideInUp 0.8s ease-out 0.6s forwards;
        }

        .hero__stats {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 1.5rem;
          opacity: 0;
          animation: slideInUp 0.8s ease-out 0.8s forwards;
        }

        .hero__stats li {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.6;
          padding-left: 1.5rem;
          position: relative;
        }

        .hero__stats li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .hero__stats span {
          color: #7c3aed;
          font-weight: 700;
        }

        .hero__aside {
          background: rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: left;
          backdrop-filter: blur(10px);
          opacity: 0;
          animation: slideInRight 0.8s ease-out 0.5s forwards;
        }

        .hero__aside h3 {
          margin-bottom: 1.5rem;
          color: #fff;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .hero__aside p {
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        .hero__aside ul {
          list-style: none;
          padding: 0;
        }

        .hero__aside li {
          margin-bottom: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          position: relative;
          padding-left: 1.5rem;
          line-height: 1.5;
        }

        .hero__aside li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-weight: bold;
        }

        .section {
          padding: 100px 0;
        }

        .section--alt {
          background: rgba(255, 255, 255, 0.02);
        }

        .section--cta {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
        }

        .section__inner {
          text-align: center;
        }

        .section h2 {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section__lead {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .grid {
          display: grid;
          gap: 2.5rem;
          margin-top: 3.5rem;
        }

        .grid--features {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .grid--insights {
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }

        .card {
          background: rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          text-align: left;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          border-color: rgba(124, 58, 237, 0.3);
        }

        .card h3 {
          margin-bottom: 1.2rem;
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .card p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.6;
        }

        .steps {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 3.5rem;
        }

        .steps li {
          background: rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          backdrop-filter: blur(10px);
          text-align: left;
          transition: all 0.3s ease;
        }

        .steps li:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 58, 237, 0.3);
        }

        .steps span {
          display: block;
          color: #7c3aed;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
        }

        .cta__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          text-align: left;
        }

        .cta__actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer {
          background: #0a0a0a;
          padding: 2.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .muted {
          color: rgba(255, 255, 255, 0.5);
        }

        /* Animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero__inner {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }

          .hero__main {
            text-align: center;
          }

          .hero h1 {
            font-size: 3.2rem;
          }

          .section h2 {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.8rem;
          }

          .hero__actions {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .hero__stats {
            text-align: center;
          }

          .cta__inner {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .footer__inner {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .nav__links {
            gap: 1rem;
          }

          .section {
            padding: 60px 0;
          }

          .section h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 100px 0 60px;
          }

          .hero h1 {
            font-size: 2.2rem;
          }

          .hero__lead {
            font-size: 1.1rem;
          }

          .btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <header className="nav">
        <div className="container nav__inner">
          <a className="brand" href="#top">VIN Traffic System</a>
          <nav className="nav__links">
            <a href="#mission">Mission</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#workflow">Workflow</a>
            <a href="#insights">Insights</a>
            <button className="btn btn--primary" onClick={handleDashboardClick}>
              Launch Dashboard
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="mission">
          <div className="container hero__inner">
            <div className="hero__main">
              <p className="eyebrow">Vision Intelligence Network</p>
              <h1>Turn live traffic signals into confident decisions</h1>
              <p className="hero__lead">
                VIN brings together simulation, AI forecasts, and operator tooling so traffic control rooms move from reacting to anticipating.
              </p>
              <div className="hero__actions">
                <button className="btn btn--primary" onClick={handleDashboardClick}>
                  Open VIN Dashboard
                </button>
                <button className="btn btn--primary" onClick={handleDemoClick}>
                  Try Live Demo
                </button>
                <a className="btn btn--ghost" href="#capabilities">Explore capabilities</a>
              </div>
              <ul className="hero__stats">
                <li><span>4 cities</span> ready-to-run data pipelines for traffic management.</li>
                <li><span>&lt;2 s</span> to load live traffic scenarios and analytics.</li>
                <li><span>6 modules</span> Dashboard, Analytics, Map, Settings, and Device views.</li>
              </ul>
            </div>
            <div className="hero__aside">
              <h3>Why teams choose VIN</h3>
              <p>Streamlined setup, explainable insights, and modern React-based interface that keeps everything together.</p>
              <ul>
                <li>Real-time traffic monitoring with clear status indicators.</li>
                <li>One-click navigation between analytics and control panels.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section">
          <div className="container section__inner">
            <h2>Focused capabilities for operations</h2>
            <p className="section__lead">Each module surfaces the essentials operators need, without the noise.</p>
            <div className="grid grid--features">
              <article className="card">
                <h3>Live Monitor</h3>
                <p>Streaming KPIs, simple controls, and recent alerts keep teams aligned.</p>
              </article>
              <article className="card">
                <h3>Traffic Analytics</h3>
                <p>Interactive charts track speed and volume trends across intersections.</p>
              </article>
              <article className="card">
                <h3>Smart Mapping</h3>
                <p>Real-time traffic visualization with congestion indicators and incident markers.</p>
              </article>
              <article className="card">
                <h3>Device Control</h3>
                <p>Centralized management of traffic signals and monitoring equipment.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="workflow" className="section section--alt">
          <div className="container section__inner">
            <h2>From data to action in four steps</h2>
            <ol className="steps">
              <li><span>01</span> Monitor live traffic feeds and automated detection systems.</li>
              <li><span>02</span> Analyze patterns with advanced analytics and trend visualization.</li>
              <li><span>03</span> Coordinate responses with interactive maps and quick controls.</li>
              <li><span>04</span> Review outcomes and optimize strategies with historical data.</li>
            </ol>
          </div>
        </section>

        <section id="insights" className="section">
          <div className="container section__inner">
            <h2>What teams gain with VIN</h2>
            <div className="grid grid--insights">
              <article className="card">
                <h3>Unified experience</h3>
                <p>Modern React interface with seamless navigation between monitoring and control functions.</p>
              </article>
              <article className="card">
                <h3>Operator empathy</h3>
                <p>Interfaces designed for traffic operators with mission-critical information prominently displayed.</p>
              </article>
              <article className="card">
                <h3>Real-time insights</h3>
                <p>Live data visualization with interactive charts and instant status updates.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--cta">
          <div className="container section__inner cta__inner">
            <div>
              <h2>Ready to explore VIN?</h2>
              <p>Experience the modern traffic management interface with real-time monitoring and advanced analytics.</p>
            </div>
            <div className="cta__actions">
              <button className="btn btn--primary" onClick={handleDashboardClick}>
                Launch Dashboard
              </button>
              <a 
                className="btn btn--ghost" 
                href="https://github.com/baalaganeshr/traffic-management-system" 
                target="_blank" 
                rel="noopener"
              >
                View repository
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>&copy; {new Date().getFullYear()} VIN Traffic System</div>
          <div className="muted">Professional traffic intelligence, delivered.</div>
        </div>
      </footer>
    </div>
  );
};

export default VinLanding;