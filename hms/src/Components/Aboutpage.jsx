import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import AboutUsImage from '../Assets/Images/AboutUs.png';

const overviewCards = [
  {
    title: 'Patient-first workflow',
    text: 'Keep every visit connected so staff can see the full context before making decisions.'
  },
  {
    title: 'Team coordination',
    text: 'Help reception, doctors, and billing teams stay aligned without jumping between tools.'
  },
  {
    title: 'Reliable operations',
    text: 'Support daily hospital work with a layout that stays readable, organized, and quick to use.'
  }
];

const stats = [
  { icon: 'ER', number: '9', label: 'Bedded Emergency Unit' },
  { icon: 'NICU', number: '7', label: 'Bedded NICU' },
  { icon: 'SURG', number: '9', label: 'Bedded Surgical Unit' },
  { icon: 'ICU', number: '18', label: 'Bedded Medical ICU' }
];

const whyChoose = [
  {
    title: 'Excellence in Care',
    text: 'Expert professionals with advanced technology delivering world-class medical care with precision and expertise.'
  },
  {
    title: 'Comprehensive Services',
    text: 'Complete healthcare solutions under one roof, from diagnostics to specialized treatments and surgeries.'
  },
  {
    title: '24/7 Emergency',
    text: 'Rapid, reliable emergency response available round the clock with our dedicated trauma care team.'
  },
  {
    title: 'Patient First',
    text: 'Compassionate and personalized attention ensuring every patient receives individualized care and support.'
  },
  {
    title: 'Advanced Diagnostics',
    text: 'Precision through modern facilities with state-of-the-art diagnostic equipment and imaging technology.'
  },
  {
    title: 'Affordable & Transparent',
    text: 'Quality care at fair pricing with transparent billing, making healthcare accessible to everyone.'
  }
];

function Aboutpage() {
  const { isLoggedIn } = useAuth();
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
              {isLoggedIn && <NavLink className="nav-icon" to="/profile" aria-label="Profile">+</NavLink>}
            </nav>
          </header>

          <section className="content-section about-section" id="about">
            <div className="about-layout">
              <div className="about-media" aria-hidden="true">
                <img src={AboutUsImage} alt="MediCare overview" className="about-image" loading="lazy" />
              </div>

              <div className="about-content">
                <div className="section-heading">
                  <span className="section-kicker">Who we are</span>
                  <h2>A hospital platform shaped around real workflows</h2>
                  <p>
                    MediCare helps hospital teams manage patient journeys from registration to discharge with a cleaner
                    process, fewer manual steps, and clearer communication between departments.
                  </p>
                </div>

                <div className="about-grid">
                  {overviewCards.map((card) => (
                    <article className="info-card" key={card.title}>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="content-section stats-section-container">
            <div className="stats-section">
              <div className="section-kicker">Specialized Care Units</div>
              <h2>Advanced Care Facilities</h2>
              <p>State-of-the-art specialized units designed for comprehensive patient care</p>
              <div className="stats-grid">
                {stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section mission-vision-container">
            <div className="mission-vision">
              <div className="mission">
                <span className="mission-kicker">MISSION</span>
                <h3>Our Mission</h3>
                <p>
                  To deliver comprehensive, compassionate, and accessible healthcare services that uphold the highest
                  standards of medical excellence, while nurturing a healing environment that honors the dignity, trust,
                  and well-being of every individual.
                </p>
                <div className="underline"></div>
              </div>
              <div className="vision">
                <span className="vision-kicker">VISION</span>
                <h3>Our Vision</h3>
                <p>
                  To lead healthcare innovation by setting new benchmarks for excellence and patient satisfaction, both
                  within our community and beyond.
                </p>
                <div className="underline"></div>
              </div>
            </div>
          </section>

          <section className="content-section why-choose-container">
            <div className="why-choose-us">
              <div className="why-choose-header">
                <div className="section-kicker excellence-kicker">Excellence in Healthcare</div>
                <h2>Why Choose MediCare?</h2>
                <div className="header-divider">Care</div>
                <p>
                  Discover the reasons why thousands of patients trust us with their health and well-being. Our
                  commitment to excellence, advanced technology, and compassionate care sets us apart.
                </p>
              </div>

              <ul className="why-grid">
                {whyChoose.map((item) => (
                  <li key={item.title}>
                    <div className="why-icon">+</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
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

export default Aboutpage;
