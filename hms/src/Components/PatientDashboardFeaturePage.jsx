import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { storage, storageKeys } from '../Utils/storage';
import { api } from '../Utils/api';
import PatientDashboardNavbar from './PatientDashboard/PatientDashboardNavbar';
import { patientDoctors, patientFeaturePages, patientRecords } from './PatientDashboard/patientDashboardData';

function PatientTable({ columns, rows }) {
  return (
    <div className="admin-module-table">
      <div className="admin-module-table-head" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(130px, 1fr))` }}>
        {columns.map((column) => <span key={column}>{column}</span>)}
      </div>
      {rows.map((row) => (
        <div className="admin-module-table-row" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(130px, 1fr))` }} key={Object.values(row).join('-')}>
          {columns.map((column) => <span key={column}>{row[column]}</span>)}
        </div>
      ))}
    </div>
  );
}

function PatientFeatureModule({ feature, appointments, contacts }) {
  if (feature === 'appointments') {
    return <PatientTable columns={['Date', 'Time', 'Doctor', 'Department', 'Status']} rows={appointments.map((item) => ({ Date: item.date, Time: item.time || 'Not assigned', Doctor: item.doctor || 'Not assigned', Department: item.department, Status: item.status || 'Requested' }))} />;
  }
  if (feature === 'doctors') {
    return <PatientTable columns={['Doctor', 'Specialty', 'Next slot', 'Contact']} rows={patientDoctors.map((item) => ({ Doctor: item.name, Specialty: item.specialty, 'Next slot': item.nextSlot, Contact: item.contact }))} />;
  }
  if (feature === 'records') {
    return <PatientTable columns={['Record', 'Date', 'Status', 'Note']} rows={patientRecords.map((item) => ({ Record: item.record, Date: item.date, Status: item.status, Note: item.note }))} />;
  }
  if (feature === 'billing') {
    return <PatientTable columns={['Invoice', 'Service', 'Amount', 'Status']} rows={[
      { Invoice: 'INV-1042', Service: 'Cardiology consultation', Amount: '$120', Status: 'Due' },
      { Invoice: 'INV-1036', Service: 'Lab diagnostics', Amount: '$80', Status: 'Paid' },
      { Invoice: 'INV-1029', Service: 'ECG', Amount: '$40', Status: 'Due' }
    ]} />;
  }
  if (feature === 'support') {
    return (
      <section className="admin-module-layout">
        <article className="admin-card admin-module-wide">
          <div className="admin-card-heading"><h3>Support requests</h3><span>Help desk</span></div>
          <ul className="admin-compact-list">
            {contacts.map((item) => <li key={item._id}>{item.subject} - {item.status || 'Open'}</li>)}
          </ul>
        </article>
      </section>
    );
  }
  return null;
}

function PatientDashboardFeaturePage() {
  const { feature } = useParams();
  const { logout } = useAuth();
  const session = storage.readSession(storageKeys.authSession, null);
  const page = patientFeaturePages[feature];
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Promise.allSettled([api.getAppointments(), api.getContacts()]).then(([appointmentsResult, contactsResult]) => {
      if (appointmentsResult.status === 'fulfilled') setAppointments(appointmentsResult.value.data || []);
      if (contactsResult.status === 'fulfilled') setContacts(contactsResult.value.data || []);
    });
  }, []);

  if (!session) return <Navigate to="/login" replace />;
  if (!page) return <Navigate to="/patient-dashboard" replace />;

  return (
    <main className="page admin-page">
      <div className="page-inner admin-page-inner">
        <PatientDashboardNavbar onLogout={logout} />
        <section className="admin-feature-page">
          <div className="admin-feature-hero doctor-hero">
            <div>
              <span className="admin-date">{page.kicker}</span>
              <h1>{page.title}</h1>
              <p>{page.summary}</p>
            </div>
            <Link className="button-secondary" to="/patient-dashboard">Back to overview</Link>
          </div>
          <article className="admin-card">
            <div className="admin-card-heading"><h3>{page.title}</h3><span>Patient portal</span></div>
            <PatientFeatureModule feature={feature} appointments={appointments} contacts={contacts} />
          </article>
        </section>
      </div>
    </main>
  );
}

export default PatientDashboardFeaturePage;
