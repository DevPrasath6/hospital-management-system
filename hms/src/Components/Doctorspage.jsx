import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const doctors = [
  {
    badge: 'Founder',
    name: 'Dr. S. Sanjith',
    specialty: 'Dermatology & Cosmetology',
    role: 'Founder & Managing Director, Consultant Dermatologist',
    credentials: 'MD (DERM)'
  },
  {
    badge: 'CEO',
    name: 'Dr. P. Selvakumar',
    specialty: 'Emergency, Critical Care & Anaesthesia',
    role: 'CEO & Medical Director, Senior Consultant',
    credentials: 'MD, PDCC'
  },
  {
    name: 'Dr. S. Natarajan',
    specialty: 'Orthopedic Surgeon',
    role: 'Senior Consultant, Orthopedic Surgeon',
    credentials: 'MBBS, MS (ORTHO), D.ORTHO'
  },
  {
    name: 'Dr. R. Premakumari',
    specialty: 'Obstetrician & Gynaecologist',
    role: 'Senior Consultant, Obstetrician & Gynaecologist',
    credentials: 'MBBS, MD (OG)'
  },
  {
    name: 'Dr. N. Padmanaban',
    specialty: 'Interventional Cardiologist',
    role: 'Senior Consultant, Interventional Cardiologist',
    credentials: 'MBBS, MD, DM (CARDIO)'
  },
  {
    name: 'Dr. K. L. Sathish Kumar',
    specialty: 'Gastroenterologist',
    role: 'Sr. Consultant Endoscopist, Surgical Gastroenterologist & Laparoscopic...',
    credentials: 'MBBS, MS (Gen Surg), FRCS (Ed), DBB (Surg Gastro)'
  },
  {
    name: 'Dr. M. Praveen Kumar',
    specialty: 'Interventional Cardiologist',
    role: 'Consultant Interventional Cardiologist',
    credentials: 'MBBS, MD, DM (CARDIO)'
  },
  {
    name: 'Dr. E. Parvathavardhini',
    specialty: 'Pediatrician & Neonatologist',
    role: 'Senior Consultant Pediatrician & Neonatologist / Lactation Consultant',
    credentials: 'MBBS, MD (PAED)'
  }
];

function Doctorspage() {
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

          <section className="content-section doctors-section" id="doctors">
            <div className="section-heading">
              <span className="section-kicker">Our doctors</span>
              <h2>Meet our expert medical team</h2>
              <p>
                A dedicated team of highly qualified physicians and specialists committed to providing compassionate,
                excellent care to every patient.
              </p>
            </div>

            <div className="doctors-grid">
              {doctors.map((doctor) => (
                <div className="doctor-card" key={doctor.name}>
                  {doctor.badge ? (
                    <div className={`doctor-badge ${doctor.badge === 'CEO' ? 'ceo-badge' : ''}`}>
                      {doctor.badge}
                    </div>
                  ) : null}
                  <div className="doctor-image"></div>
                  <h3>{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  <p className="doctor-role">{doctor.role}</p>
                  <p className="doctor-cred">{doctor.credentials}</p>
                </div>
              ))}
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

export default Doctorspage;
