import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { storage, storageKeys } from '../Utils/storage';

function DoctorDashboardpage() {
  const { logout } = useAuth();
  const session = storage.readSession(storageKeys.authSession, null);
  const userName = session ? `${session.firstName || ''} ${session.lastName || ''}`.trim() : 'Doctor';
  const schedule = [
    { time: '09:00', patient: 'Ava Johnson', type: 'Follow-up consultation' },
    { time: '10:30', patient: 'Noah Smith', type: 'Cardiology review' },
    { time: '01:00', patient: 'Mia Patel', type: 'Lab result discussion' },
    { time: '03:15', patient: 'Ethan Brown', type: 'New patient intake' }
  ];

  const taskList = [
    'Review morning lab results',
    'Confirm afternoon appointment slots',
    'Update patient notes after consult',
    'Respond to admin messages'
  ];

  return (
    <main className="page">
      <div className="page-inner">
        <header className="topbar">
          <Link className="brand" to="/" aria-label="MediCare home">
            <span className="brand-mark" aria-hidden="true"></span>
            <span className="brand-name">MediCare</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/appointment">Appointment</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/admin-dashboard">Admin Dashboard</NavLink>
            <button className="button button-ghost" type="button" onClick={logout}>Logout</button>
          </nav>
        </header>

        <section className="auth-layout dashboard-layout">
          <div className="auth-panel dashboard-panel">
            <div className="kicker">Clinical workflow</div>
            <h1>Doctor dashboard</h1>
            <p>
              Manage your appointments, reviews, and follow-ups in one place. Logged in as {userName || 'Doctor'}.
            </p>
            <div className="hero-actions">
              <Link className="button-secondary" to="/appointment">View bookings</Link>
              <Link className="button-secondary" to="/contact">Patient messages</Link>
            </div>
          </div>

          <section className="auth-card dashboard-card" aria-labelledby="doctor-dashboard-title">
            <h2 id="doctor-dashboard-title">Today’s schedule</h2>
            <p className="subtext">Your upcoming visits and work queue for the day.</p>

            <div className="dashboard-section">
              <ul className="dashboard-list schedule-list">
                {schedule.map((item) => (
                  <li key={`${item.time}-${item.patient}`}>
                    <strong>{item.time}</strong>
                    <span>{item.patient}</span>
                    <em>{item.type}</em>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dashboard-section">
              <h3>Focus items</h3>
              <ul className="dashboard-list">
                {taskList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default DoctorDashboardpage;
