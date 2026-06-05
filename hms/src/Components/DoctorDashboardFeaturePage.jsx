import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { storage, storageKeys } from '../Utils/storage';
import { api } from '../Utils/api';
import DoctorDashboardNavbar from './DoctorDashboard/DoctorDashboardNavbar';
import { doctorFeaturePages, doctorTasks } from './DoctorDashboard/doctorDashboardData';

function DoctorModuleTable({ columns, rows }) {
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

function ScheduleModule({ appointments }) {
  return (
    <section className="admin-module-layout">
      <article className="admin-card admin-module-wide">
        <div className="admin-card-heading"><h3>Appointment schedule</h3><span>Today</span></div>
        <DoctorModuleTable columns={['Time', 'Patient', 'Type', 'Room', 'Status']} rows={appointments.map((item) => ({
          Time: item.date || 'Not set',
          Patient: item.patientName || item.patient,
          Type: item.notes || item.department,
          Room: item.department,
          Status: item.status || 'Requested'
        }))} />
      </article>
      <article className="admin-card">
        <div className="admin-card-heading"><h3>Availability controls</h3><span>Slots</span></div>
        <ul className="admin-compact-list">
          <li>Open emergency buffer from 12:00 to 12:30</li>
          <li>Block procedure time from 02:00 to 02:45</li>
          <li>Mark evening OPD as limited availability</li>
          <li>Request room C-204 for cardiology reviews</li>
        </ul>
      </article>
      <article className="admin-card">
        <div className="admin-card-heading"><h3>Visit status</h3><span>Flow</span></div>
        <div className="admin-lane-list">
          <div><strong>Requested</strong><span>{appointments.filter((item) => (item.status || 'Requested') === 'Requested').length} patients</span></div>
          <div><strong>Confirmed</strong><span>{appointments.filter((item) => item.status === 'Confirmed').length} patients</span></div>
          <div><strong>Completed</strong><span>{appointments.filter((item) => item.status === 'Completed').length} visits</span></div>
        </div>
      </article>
    </section>
  );
}

function PatientsModule({ appointments }) {
  return (
    <section className="admin-module-layout">
      <article className="admin-card admin-module-wide">
        <div className="admin-card-heading"><h3>Assigned patient panel</h3><span>Clinical list</span></div>
        <DoctorModuleTable columns={['Name', 'Phone', 'Condition', 'Priority', 'Visit date', 'Next step']} rows={appointments.map((item) => ({
          Name: item.patientName || item.patient,
          Phone: item.phone || 'Not provided',
          Condition: item.notes || item.department,
          Priority: item.status || 'Requested',
          'Visit date': item.date || 'Not set',
          'Next step': item.status === 'Confirmed' ? 'Prepare consultation' : 'Await confirmation'
        }))} />
      </article>
      <article className="admin-card">
        <div className="admin-card-heading"><h3>Priority follow-ups</h3><span>Care plan</span></div>
        <ul className="admin-compact-list">
          {appointments.slice(0, 4).map((item) => <li key={item._id}>{item.patientName || item.patient} - {item.notes || item.department}</li>)}
        </ul>
      </article>
    </section>
  );
}

function ConsultationsModule() {
  return (
    <section className="admin-module-layout">
      <article className="admin-card admin-module-wide">
        <div className="admin-card-heading"><h3>Consultation workspace</h3><span>Encounter notes</span></div>
        <div className="doctor-consult-grid">
          <div><strong>Symptoms</strong><span>Chest discomfort, fatigue, elevated BP</span></div>
          <div><strong>Vitals</strong><span>BP 148/92, HR 86, SpO2 98%</span></div>
          <div><strong>Diagnosis draft</strong><span>Hypertension review with cardiac risk screening</span></div>
          <div><strong>Prescription draft</strong><span>Amlodipine review, lifestyle advice, follow-up in 2 weeks</span></div>
        </div>
      </article>
      <article className="admin-card">
        <div className="admin-card-heading"><h3>Pending actions</h3><span>Clinical</span></div>
        <ul className="admin-compact-list">
          {doctorTasks.map((task) => <li key={task}>{task}</li>)}
        </ul>
      </article>
    </section>
  );
}

function RecordsModule({ appointments }) {
  return (
    <section className="admin-module-layout">
      <article className="admin-card admin-module-wide">
        <div className="admin-card-heading"><h3>Medical record review</h3><span>History</span></div>
        <DoctorModuleTable columns={['Patient', 'Record', 'Result', 'Flag', 'Action']} rows={[
          ...appointments.map((item) => ({ Patient: item.patientName || item.patient, Record: 'Appointment note', Result: item.notes || item.department, Flag: item.status || 'Requested', Action: 'Review during visit' }))
        ]} />
      </article>
      <article className="admin-card">
        <div className="admin-card-heading"><h3>Record categories</h3><span>Files</span></div>
        <div className="admin-lane-list">
          <div><strong>Lab reports</strong><span>11</span></div>
          <div><strong>Imaging</strong><span>3</span></div>
          <div><strong>Medication history</strong><span>18</span></div>
          <div><strong>Allergy flags</strong><span>6</span></div>
        </div>
      </article>
    </section>
  );
}

function ReportsModule({ appointments }) {
  return (
    <section className="admin-module-layout">
      <article className="admin-card admin-module-wide">
        <div className="admin-card-heading"><h3>Clinical performance reports</h3><span>Analytics</span></div>
        <DoctorModuleTable columns={['Report', 'Metric', 'Current', 'Target']} rows={[
          { Report: 'OPD completion', Metric: 'Visits completed', Current: String(appointments.filter((item) => item.status === 'Completed').length), Target: String(appointments.length) },
          { Report: 'Confirmed visits', Metric: 'Approved appointments', Current: String(appointments.filter((item) => item.status === 'Confirmed').length), Target: String(appointments.length) },
          { Report: 'Pending requests', Metric: 'Awaiting action', Current: String(appointments.filter((item) => (item.status || 'Requested') === 'Requested').length), Target: '0' }
        ]} />
      </article>
      <article className="admin-card">
        <div className="admin-card-heading"><h3>Exports</h3><span>Reports</span></div>
        <ul className="admin-compact-list">
          <li>Daily consultation summary</li>
          <li>Pending note report</li>
          <li>Follow-up patient list</li>
          <li>Lab review summary</li>
        </ul>
      </article>
    </section>
  );
}

function DoctorFeatureModule({ feature, appointments }) {
  if (feature === 'schedule') return <ScheduleModule appointments={appointments} />;
  if (feature === 'patients') return <PatientsModule appointments={appointments} />;
  if (feature === 'consultations') return <ConsultationsModule />;
  if (feature === 'records') return <RecordsModule appointments={appointments} />;
  if (feature === 'reports') return <ReportsModule appointments={appointments} />;
  return null;
}

function DoctorDashboardFeaturePage() {
  const { feature } = useParams();
  const { logout } = useAuth();
  const session = storage.readSession(storageKeys.authSession, null);
  const page = doctorFeaturePages[feature];
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.getAppointments()
      .then((response) => setAppointments(response.data || []))
      .catch(() => setAppointments([]));
  }, []);

  const liveStats = useMemo(() => ([
    { label: 'Appointments', value: String(appointments.length), note: 'Total records' },
    { label: 'Requested', value: String(appointments.filter((item) => (item.status || 'Requested') === 'Requested').length), note: 'Waiting confirmation' },
    { label: 'Confirmed', value: String(appointments.filter((item) => item.status === 'Confirmed').length), note: 'Approved visits' },
    { label: 'Completed', value: String(appointments.filter((item) => item.status === 'Completed').length), note: 'Closed visits' }
  ]), [appointments]);

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (!page) {
    return <Navigate to="/doctor-dashboard" replace />;
  }

  return (
    <main className="page admin-page">
      <div className="page-inner admin-page-inner">
        <DoctorDashboardNavbar onLogout={logout} />

        <section className="admin-feature-page" aria-labelledby="doctor-feature-title">
          <div className="admin-feature-hero doctor-hero">
            <div>
              <span className="admin-date">{page.kicker}</span>
              <h1 id="doctor-feature-title">{page.title}</h1>
              <p>{page.summary}</p>
            </div>
            <Link className="button-secondary" to="/doctor-dashboard">Back to overview</Link>
          </div>

          <section className="admin-feature-stats" aria-label={`${page.title} key stats`}>
            {liveStats.map((stat) => (
              <article className="admin-metric" key={stat.label}>
                <span className="admin-metric-icon">{stat.label.slice(0, 2).toUpperCase()}</span>
                <span className="dashboard-stat-label">{stat.label}</span>
                <strong className="dashboard-stat-value">{stat.value}</strong>
                <span className="dashboard-stat-note">{stat.note}</span>
              </article>
            ))}
          </section>

          <DoctorFeatureModule feature={feature} appointments={appointments} />
        </section>
      </div>
    </main>
  );
}

export default DoctorDashboardFeaturePage;
