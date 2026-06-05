export const patientNavItems = [
  { label: 'Overview', path: '/patient-dashboard' },
  { label: 'Appointments', path: '/patient-dashboard/appointments' },
  { label: 'Doctors', path: '/patient-dashboard/doctors' },
  { label: 'Records', path: '/patient-dashboard/records' },
  { label: 'Billing', path: '/patient-dashboard/billing' },
  { label: 'Support', path: '/patient-dashboard/support' }
];

export const patientMetrics = [
  { label: 'Upcoming visits', value: '3', note: 'Next visit tomorrow', icon: 'UV' },
  { label: 'Prescriptions', value: '5', note: '2 active refills', icon: 'RX' },
  { label: 'Reports ready', value: '4', note: 'Lab and imaging', icon: 'RP' },
  { label: 'Pending bills', value: '$240', note: '1 invoice due', icon: 'BL' }
];

export const patientAppointments = [
  { date: 'June 05', time: '10:30 AM', doctor: 'Dr. Raj Mehta', department: 'Cardiology', status: 'Confirmed' },
  { date: 'June 09', time: '09:00 AM', doctor: 'Dr. Priya Menon', department: 'Cardiology', status: 'Follow-up' },
  { date: 'June 15', time: '02:20 PM', doctor: 'Dr. Anika Rao', department: 'General Medicine', status: 'Requested' }
];

export const patientDoctors = [
  { name: 'Dr. Raj Mehta', specialty: 'Cardiology', nextSlot: 'June 05, 10:30 AM', contact: 'Care team desk' },
  { name: 'Dr. Priya Menon', specialty: 'Echo Specialist', nextSlot: 'June 09, 09:00 AM', contact: 'Cardiology desk' },
  { name: 'Dr. Anika Rao', specialty: 'General Medicine', nextSlot: 'June 15, 02:20 PM', contact: 'OPD desk' }
];

export const patientRecords = [
  { record: 'ECG report', date: 'June 01', status: 'Reviewed', note: 'Borderline changes' },
  { record: 'Lipid profile', date: 'May 29', status: 'Ready', note: 'LDL elevated' },
  { record: 'Prescription', date: 'May 28', status: 'Active', note: '2 medicines' },
  { record: 'Discharge summary', date: 'April 18', status: 'Archived', note: 'Available' }
];

export const patientFeaturePages = {
  appointments: {
    title: 'My appointments',
    kicker: 'Visit schedule',
    summary: 'View upcoming visits, appointment status, requested bookings, and follow-up reminders.'
  },
  doctors: {
    title: 'My doctors',
    kicker: 'Care team',
    summary: 'See assigned doctors, specialties, upcoming slots, and care-team contact details.'
  },
  records: {
    title: 'Medical records',
    kicker: 'Health history',
    summary: 'Access lab reports, prescriptions, visit summaries, imaging notes, and medical documents.'
  },
  billing: {
    title: 'Billing and payments',
    kicker: 'Invoices',
    summary: 'Track invoices, insurance claims, payment status, receipts, and pending balances.'
  },
  support: {
    title: 'Patient support',
    kicker: 'Help desk',
    summary: 'Manage questions, hospital support requests, pharmacy help, and appointment assistance.'
  }
};
