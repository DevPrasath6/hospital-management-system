import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { storage, storageKeys } from '../Utils/storage';

function AdminDashboardpage() {
  const { logout } = useAuth();
  const session = storage.readSession(storageKeys.authSession, null);
  const userName = session ? `${session.firstName || ''} ${session.lastName || ''}`.trim() : 'Hospital Admin';
  const dashboardStats = [
    { label: 'Today’s appointments', value: '24', note: '+6 since yesterday' },
    { label: 'Active doctors', value: '18', note: '4 departments covered' },
    { label: 'Pending messages', value: '7', note: '2 urgent follow-ups' },
    { label: 'Open tasks', value: '12', note: 'Ward and admin coordination' }
  ];

  const quickActions = [
    'Review appointment queue',
    'Approve staff schedules',
    'Track patient messages',
    'Monitor department load'
  ];

  const recentActivity = [
    'Cardiology appointment confirmed for 10:30 AM.',
    'Two new contact messages were received from patients.',
    'Reception uploaded a new request for room allocation.',
    'Staff availability updated for the evening shift.'
  ];

  const dashboardModules = [
    {
      title: 'Doctors',
      text: 'Review availability, specializations, shift coverage, and performance updates.'
    },
    {
      title: 'Patients',
      text: 'Track patient records, visit history, and follow-up requirements.'
    },
    {
      title: 'Appointments',
      text: 'Manage requests, confirmations, cancellations, and daily visit flow.'
    },
    {
      title: 'Departments',
      text: 'Coordinate cardiology, pediatrics, general medicine, and other service lines.'
    },
    {
      title: 'Staff',
      text: 'Keep nurses, reception, and support teams aligned with current schedules.'
    },
    {
      title: 'Billing',
      text: 'Review invoices, payment status, and outstanding balances at a glance.'
    },
    {
      title: 'Inventory',
      text: 'Monitor supplies, medical stock, equipment usage, and low-stock alerts.'
    },
    {
      title: 'Reports',
      text: 'Inspect operational summaries, trends, and department-level snapshots.'
    },
    {
      title: 'Settings',
      text: 'Adjust system preferences, access rules, and dashboard configuration.'
    }
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
            <NavLink to="/doctor-dashboard">Doctor Dashboard</NavLink>
            <button className="button button-ghost" type="button" onClick={logout}>Logout</button>
          </nav>
        </header>

        <section className="auth-layout dashboard-layout">
          <div className="auth-panel dashboard-panel">
            <div className="kicker">Hospital operations</div>
            <h1>Admin dashboard</h1>
            <p>
              Oversee appointments, staff flow, and patient communication from one control surface. Logged in as {userName || 'Hospital Admin'}.
            </p>
            <div className="hero-actions">
              <Link className="button-secondary" to="/appointment">View appointments</Link>
              <Link className="button-secondary" to="/contact">Open messages</Link>
            </div>
          </div>

          <section className="auth-card dashboard-card" aria-labelledby="admin-dashboard-title">
            <h2 id="admin-dashboard-title">Admin overview</h2>
            <p className="subtext">A compact view of the hospital’s daily operating picture.</p>

            <div className="dashboard-grid">
              {dashboardStats.map((item) => (
                <article className="dashboard-stat" key={item.label}>
                  <span className="dashboard-stat-label">{item.label}</span>
                  <strong className="dashboard-stat-value">{item.value}</strong>
                  <span className="dashboard-stat-note">{item.note}</span>
                </article>
              ))}
            </div>

            <div className="dashboard-section">
              <h3>Priority actions</h3>
              <ul className="dashboard-list">
                {quickActions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="dashboard-section">
              <h3>Recent activity</h3>
              <ul className="dashboard-list">
                {recentActivity.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="dashboard-section">
              <h3>Hospital modules</h3>
              <div className="dashboard-modules">
                {dashboardModules.map((module) => (
                  <article className="dashboard-module" key={module.title}>
                    <span className="dashboard-module-title">{module.title}</span>
                    <p>{module.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default AdminDashboardpage;
