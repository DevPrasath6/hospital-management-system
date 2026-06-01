import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Forgotpasswordpage() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email')?.trim() || '';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      setStatus('');
      return;
    }

    setError('');
    setStatus(`If an account exists for ${email}, a reset link has been sent.`);
    event.currentTarget.reset();
  }

  return (
    <>
      <Link className="floating-call" to="/contact" aria-label="Contact us">+</Link>
      <main className="page">
        <div className="page-inner">
          <header className="topbar">
            <Link className="brand" to="/" aria-label="MediCare home">
              <span className="brand-mark" aria-hidden="true"></span>
              <span className="brand-name">MediCare</span>
            </Link>

            <nav className="nav" aria-label="Primary">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/doctors">Doctors</NavLink>
              <NavLink to="/appointment">Appointment</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink className="nav-icon" to="/profile" aria-label="Profile">+</NavLink>
            </nav>
          </header>

          <section className="auth-layout">
            <div className="auth-panel">
              <div className="kicker">Account help</div>
              <h1>Forgot your password?</h1>
              <p>
                Enter the email address associated with your account and we'll send instructions to reset your password.
              </p>
            </div>

            <div className="auth-card">
              <h2>Reset your password</h2>
              <p className="subtext">We'll email you a secure link. If you don't receive it, check your spam folder.</p>

              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>

                <div className="form-row">
                  <button className="button" type="submit">Send reset link</button>
                </div>

                <p className="form-status form-error" aria-live="polite">{error}</p>
                <p className="form-status form-success" aria-live="polite">{status}</p>

                <div className="helper">
                  <p>Remembered your password? <Link to="/login">Sign in</Link></p>
                </div>
              </form>
            </div>
          </section>

          <footer className="site-footer" id="contact">
            <div>
              <div className="footer-brand">MediCare</div>
              <p>Modern hospital management built for clear communication, better care, and faster coordination.</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>support@medicare.com</p>
              <p>+1 (555) 014-2026</p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/about">About Us</Link></p>
              <p><Link to="/services">Services</Link></p>
              <p><Link to="/doctors">Doctors</Link></p>
              <p><Link to="/appointment">Appointment</Link></p>
              <p><Link to="/faq">FAQ</Link></p>
              <p><Link to="/contact">Contact</Link></p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Forgotpasswordpage;
