export const doctorNavItems = [
  { label: 'Overview', path: '/doctor-dashboard' },
  { label: 'Schedule', path: '/doctor-dashboard/schedule' },
  { label: 'Patients', path: '/doctor-dashboard/patients' },
  { label: 'Consultations', path: '/doctor-dashboard/consultations' },
  { label: 'Records', path: '/doctor-dashboard/records' },
  { label: 'Reports', path: '/doctor-dashboard/reports' }
];

export const doctorMetrics = [
  { label: 'Today visits', value: '18', note: '6 completed', icon: 'TV' },
  { label: 'Waiting patients', value: '7', note: '2 priority cases', icon: 'WP' },
  { label: 'Lab reviews', value: '11', note: '4 abnormal flags', icon: 'LR' },
  { label: 'Follow-ups', value: '9', note: 'Due this week', icon: 'FU' }
];

export const doctorSchedule = [
  { time: '09:00', patient: 'Ava Johnson', type: 'Follow-up consultation', room: 'C-202', status: 'Checked in' },
  { time: '10:30', patient: 'Noah Smith', type: 'Cardiology review', room: 'C-204', status: 'Waiting' },
  { time: '01:00', patient: 'Mia Patel', type: 'Lab result discussion', room: 'C-202', status: 'Confirmed' },
  { time: '03:15', patient: 'Ethan Brown', type: 'New patient intake', room: 'C-205', status: 'Confirmed' }
];

export const doctorPatients = [
  { name: 'Ava Johnson', age: '42', condition: 'Hypertension follow-up', priority: 'Routine', lastVisit: 'May 28', nextStep: 'Adjust medication note' },
  { name: 'Noah Smith', age: '58', condition: 'Chest discomfort review', priority: 'High', lastVisit: 'June 01', nextStep: 'Review ECG and echo' },
  { name: 'Mia Patel', age: '35', condition: 'Lipid profile review', priority: 'Routine', lastVisit: 'May 30', nextStep: 'Explain lab results' },
  { name: 'Ethan Brown', age: '49', condition: 'New intake', priority: 'Medium', lastVisit: 'First visit', nextStep: 'Create baseline notes' }
];

export const doctorTasks = [
  'Review morning lab results',
  'Update notes for completed consultations',
  'Approve two medication refill requests',
  'Send follow-up advice for high BP patient',
  'Close pending discharge summary review'
];

export const doctorFeaturePages = {
  schedule: {
    title: 'Schedule management',
    kicker: 'Clinical day planner',
    summary: 'Review appointments, room allocation, patient status, consultation order, and personal availability.',
    stats: [
      { label: 'Booked slots', value: '18', note: 'Today' },
      { label: 'Checked in', value: '7', note: 'At reception' },
      { label: 'Open buffers', value: '3', note: 'Emergency slots' },
      { label: 'Completed', value: '6', note: 'Notes pending for 2' }
    ]
  },
  patients: {
    title: 'Patient management',
    kicker: 'Patient panel',
    summary: 'Track assigned patients, priority cases, follow-ups, chronic-care notes, and next clinical steps.',
    stats: [
      { label: 'Assigned patients', value: '42', note: 'Active panel' },
      { label: 'Priority cases', value: '5', note: 'Need review' },
      { label: 'Follow-ups due', value: '9', note: 'This week' },
      { label: 'New intakes', value: '3', note: 'Today' }
    ]
  },
  consultations: {
    title: 'Consultation workspace',
    kicker: 'Clinical encounters',
    summary: 'Manage active visits, symptoms, diagnosis notes, prescriptions, advice, and consultation closure.',
    stats: [
      { label: 'Active visits', value: '4', note: 'In progress' },
      { label: 'Prescriptions', value: '12', note: 'Drafted today' },
      { label: 'Referrals', value: '3', note: 'Diagnostics and specialist' },
      { label: 'Pending notes', value: '5', note: 'Need completion' }
    ]
  },
  records: {
    title: 'Medical records',
    kicker: 'Patient history',
    summary: 'Review vitals, lab reports, imaging, medication history, allergies, and clinical documents.',
    stats: [
      { label: 'Lab reports', value: '11', note: '4 abnormal flags' },
      { label: 'Imaging reports', value: '3', note: 'Awaiting review' },
      { label: 'Allergy flags', value: '6', note: 'Active patients' },
      { label: 'Record updates', value: '14', note: 'Today' }
    ]
  },
  reports: {
    title: 'Doctor reports',
    kicker: 'Clinical summaries',
    summary: 'Review workload, patient outcomes, consultation completion, referrals, and follow-up performance.',
    stats: [
      { label: 'OPD completion', value: '88%', note: 'Today' },
      { label: 'Avg visit time', value: '18m', note: 'Consultation average' },
      { label: 'Follow-up closure', value: '76%', note: 'This week' },
      { label: 'Reports ready', value: '5', note: 'For export' }
    ]
  }
};
