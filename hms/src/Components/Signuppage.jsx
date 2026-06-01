import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Signuppage() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setStatus('');
      return;
    }

    setError('');
    setStatus('Account created successfully. You can now sign in.');
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
              <div className="kicker">Create your hospital workspace</div>
              <h1>Build a smarter care network.</h1>
              <p>
                Set up your MediCare account to coordinate staff, patients, appointments, and services from a single
                secure dashboard.
              </p>
              <div className="hero-actions">
                <Link className="button-secondary" to="/login">Back to login</Link>
              </div>
            </div>

            <section className="auth-card" aria-labelledby="signup-title">
              <h2 id="signup-title">Sign Up</h2>
              <p className="subtext">Join MediCare and start managing your hospital with a clean, modern interface.</p>

              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="first-name">First name</label>
                    <input id="first-name" name="firstName" type="text" placeholder="Aarav" required />
                  </div>
                  <div className="field">
                    <label htmlFor="last-name">Last name</label>
                    <input id="last-name" name="lastName" type="text" placeholder="Sharma" required />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="signup-email">Email address</label>
                  <input id="signup-email" name="email" type="email" placeholder="name@hospital.com" required />
                </div>

                <div className="field">
                  <label htmlFor="role">Role</label>
                  <select id="role" name="role" defaultValue="Hospital Admin">
                    <option>Hospital Admin</option>
                    <option>Doctor</option>
                    <option>Nurse</option>
                    <option>Receptionist</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="new-password">Password</label>
                    <input id="new-password" name="password" type="password" placeholder="Create a password" required />
                  </div>
                  <div className="field">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Repeat password"
                      required
                    />
                  </div>
                </div>

                <label className="checkbox" htmlFor="terms">
                  <input id="terms" name="terms" type="checkbox" required />
                  <span>I agree to the MediCare terms and privacy policy</span>
                </label>

                <button className="button" type="submit">Create Account</button>
                <p className="form-status form-error" aria-live="polite">{error}</p>
                <p className="form-status form-success" aria-live="polite">{status}</p>
              </form>

              <p className="helper">
                Already have an account? <Link className="ghost-link" to="/login">Sign in here</Link>
              </p>
            </section>
          </section>

          <footer className="site-footer site-footer-auth" id="contact">
            <div>
              <div className="footer-brand">MediCare</div>
              <p>Simple onboarding for teams that need a clear hospital workflow.</p>
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

export default Signuppage;
