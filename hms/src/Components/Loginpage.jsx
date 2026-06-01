import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setEmail(localStorage.getItem('medicare_email') || '');
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const emailValue = form.get('email')?.trim() || '';
    const password = form.get('password') || '';
    const remember = form.get('remember') === 'on';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setError('Please enter a valid email address.');
      setStatus('');
      return;
    }

    if (!password) {
      setError('Please enter your password.');
      setStatus('');
      return;
    }

    if (remember) {
      localStorage.setItem('medicare_email', emailValue);
    } else {
      localStorage.removeItem('medicare_email');
    }

    setError('');
    setStatus('Login successful. Redirecting...');
    setTimeout(() => navigate('/profile'), 800);
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
              <div className="kicker">Trusted hospital management platform</div>
              <h1>Welcome back to MediCare.</h1>
              <p>
                Sign in to continue managing appointments, patient records, and your hospital workflow with a calm,
                consistent interface.
              </p>
              <div className="hero-actions">
                <Link className="button-secondary" to="/signup">Create account</Link>
              </div>
            </div>

            <section className="auth-card" aria-labelledby="login-title">
              <h2 id="login-title">Login</h2>
              <p className="subtext">Enter your details to access the Medicare dashboard.</p>

              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@hospital.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="password">Password</label>
                  <input id="password" name="password" type="password" placeholder="Enter your password" />
                </div>

                <div className="form-options">
                  <label className="checkbox" htmlFor="remember">
                    <input id="remember" name="remember" type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <Link to="/forgot">Forgot password?</Link>
                </div>

                <button className="button" type="submit">Login</button>
                <p className="form-status form-error" aria-live="polite">{error}</p>
                <p className="form-status form-success" aria-live="polite">{status}</p>
              </form>

              <p className="helper">
                New to MediCare? <Link className="ghost-link" to="/signup">Create your account</Link>
              </p>
            </section>
          </section>

          <footer className="site-footer site-footer-auth" id="contact">
            <div>
              <div className="footer-brand">MediCare</div>
              <p>Secure access for hospital teams and administrators.</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>support@medicare.com</p>
              <p>+1 (555) 014-2026</p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <p><Link to="/about">About Us</Link></p>
              <p><Link to="/services">Services</Link></p>
              <p><Link to="/signup">Sign Up</Link></p>
              <p><Link to="/doctors">Doctors</Link></p>
              <p><Link to="/appointment">Appointment</Link></p>
              <p><Link to="/contact">Contact</Link></p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Loginpage;
