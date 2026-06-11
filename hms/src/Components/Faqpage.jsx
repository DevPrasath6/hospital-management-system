import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Faqpage() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Link className="floating-call" to="/contact" aria-label="Contact us">+</Link>
      <main className="page">
        <div className="page-inner">
          <header className="topbar">
            <Link className="brand" to="/" aria-label="MediCare home">
              <span className="brand-mark" aria-hidden="false"></span>
              <span className="brand-name">MediCare</span>
            </Link>

            <nav className="nav" aria-label="Primary">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/doctors">Doctors</NavLink>
              <NavLink to="/appointment">Appointment</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              {isLoggedIn && <NavLink className="nav-icon" to="/profile" aria-label="Profile">+</NavLink>}
            </nav>
          </header>

          <section className="content-section faq-section" id="faq">
            <div className="section-heading faq-heading">
              <span className="section-kicker">Need answers</span>
              <h2>Everything patients and staff usually ask before getting started</h2>
              <p>
                These answers are shaped around the way MediCare works, so the FAQ feels like part of the same system
                instead of a generic Bootstrap template.
              </p>
            </div>

            <p className="doctor-status">No FAQ entries have been added yet.</p>
          </section>

          <footer className="site-footer" id="contact">
            <div>
              <div className="footer-brand">MediCare</div>
              <p>Modern hospital management built for clear communication, better care, and faster coordination.</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Use the contact page to reach the hospital team.</p>
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

export default Faqpage;
