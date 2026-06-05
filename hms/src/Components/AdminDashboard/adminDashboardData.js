export const metrics = [
  { label: 'Total patients', value: '1,284', note: '86 admitted today', icon: 'PT' },
  { label: 'Appointments', value: '96', note: '22 waiting approval', icon: 'AP' },
  { label: 'Doctors on duty', value: '42', note: '9 departments covered', icon: 'DR' },
  { label: 'Bed occupancy', value: '78%', note: '36 beds available', icon: 'BD' },
  { label: 'Monthly revenue', value: '$84.2K', note: '+12% from last month', icon: 'BL' },
  { label: 'Inventory alerts', value: '14', note: '5 critical stock items', icon: 'IN' }
];

export const departments = [
  { name: 'Emergency', load: 88, doctors: 8, patients: 42, status: 'High load' },
  { name: 'Cardiology', load: 74, doctors: 6, patients: 31, status: 'Stable' },
  { name: 'Pediatrics', load: 58, doctors: 5, patients: 24, status: 'Normal' },
  { name: 'Orthopedics', load: 69, doctors: 4, patients: 28, status: 'Busy' }
];

export const appointmentQueue = [
  { time: '09:30', patient: 'Riya Sharma', doctor: 'Dr. Mehta', department: 'Cardiology', status: 'Confirmed' },
  { time: '10:15', patient: 'Aarav Patel', doctor: 'Dr. Khan', department: 'Pediatrics', status: 'Pending' },
  { time: '11:00', patient: 'Maya Singh', doctor: 'Dr. Rao', department: 'Orthopedics', status: 'Checked in' },
  { time: '12:20', patient: 'Noah Wilson', doctor: 'Dr. Iyer', department: 'General Medicine', status: 'Pending' }
];

export const staffRoster = [
  { role: 'Reception', coverage: '6 / 7', shift: 'Morning', note: 'One backup needed' },
  { role: 'Nursing', coverage: '22 / 24', shift: 'All wards', note: 'ICU fully staffed' },
  { role: 'Lab technicians', coverage: '8 / 8', shift: 'Day', note: 'Reports on schedule' },
  { role: 'Pharmacy', coverage: '5 / 6', shift: 'Evening', note: 'Add counter support' }
];

export const alerts = [
  { title: 'Oxygen cylinders below reorder level', tag: 'Critical' },
  { title: 'Emergency department waiting time crossed 35 min', tag: 'Attention' },
  { title: 'Three discharge summaries awaiting approval', tag: 'Review' },
  { title: 'Insurance claim batch ready for submission', tag: 'Billing' }
];

export const reports = [
  'Daily admissions and discharge summary',
  'Doctor utilization and shift coverage',
  'Revenue, invoices, and pending payments',
  'Inventory consumption and purchase requests'
];

export const adminNavItems = [
  { label: 'Overview', path: '/admin-dashboard' },
  { label: 'Departments', path: '/admin-dashboard/departments' },
  { label: 'Appointments', path: '/admin-dashboard/appointments' },
  { label: 'Staff', path: '/admin-dashboard/staff' },
  { label: 'Resources', path: '/admin-dashboard/resources' },
  { label: 'Reports', path: '/admin-dashboard/reports' }
];

export const adminFeaturePages = {
  departments: {
    title: 'Department management',
    kicker: 'Hospital departments',
    summary: 'Manage service-line load, doctor allocation, patient movement, and department-level operational priorities.',
    stats: [
      { label: 'Active departments', value: '9', note: '4 high-volume units' },
      { label: 'Avg. utilization', value: '71%', note: 'Across clinical departments' },
      { label: 'Escalations', value: '3', note: 'Need admin review' },
      { label: 'Transfer requests', value: '11', note: 'Between wards and units' },
      { label: 'Heads on duty', value: '7', note: '2 departments remote' },
      { label: 'Delayed discharges', value: '6', note: 'Awaiting clearance' }
    ],
    sections: [
      {
        title: 'Capacity planning',
        items: [
          'Review patient census by department and ward',
          'Reassign doctors to high-load units',
          'Track waiting times and service delays',
          'Monitor ICU, emergency, and general ward pressure',
          'Plan overflow beds for evening admissions',
          'Escalate high-risk department load to operations head'
        ]
      },
      {
        title: 'Department coordination',
        items: [
          'Schedule department head check-ins',
          'Monitor referrals between units',
          'Follow up on delayed discharge approvals',
          'Coordinate shared diagnostic slots',
          'Review inter-department transfer notes',
          'Assign admin owner for unresolved department issues'
        ]
      },
      {
        title: 'Quality checks',
        items: [
          'Audit clinical documentation completion',
          'Compare daily outcomes by department',
          'Flag repeated bottlenecks for review',
          'Check consent forms and procedure readiness',
          'Review infection-control checklist completion',
          'Track department-level patient feedback'
        ]
      },
      {
        title: 'Department directory',
        items: [
          'Emergency - triage, trauma, urgent care, ambulance desk',
          'Cardiology - OPD, ECG, echo, cardiac follow-up',
          'Pediatrics - child OPD, vaccination, neonatal support',
          'Orthopedics - fracture clinic, physiotherapy referrals',
          'General Medicine - routine OPD, chronic care, fever clinic',
          'Diagnostics - lab, radiology, sample collection'
        ]
      }
    ]
  },
  appointments: {
    title: 'Appointment management',
    kicker: 'Booking operations',
    summary: 'Control appointment approvals, patient check-ins, cancellations, doctor calendars, and front-desk queues.',
    stats: [
      { label: 'Today booked', value: '96', note: '18 new requests' },
      { label: 'Pending approval', value: '22', note: '6 priority patients' },
      { label: 'Checked in', value: '41', note: 'Front desk verified' },
      { label: 'Cancelled', value: '7', note: 'Need rescheduling' },
      { label: 'Walk-ins', value: '13', note: 'Emergency desk excluded' },
      { label: 'No-shows', value: '4', note: 'Follow-up pending' }
    ],
    sections: [
      {
        title: 'Queue management',
        items: [
          'Approve pending appointment requests',
          'Move urgent patients into priority slots',
          'Balance walk-ins with scheduled visits',
          'Mark checked-in patients after front desk verification',
          'Assign room number and token sequence',
          'Flag delayed patients for reception follow-up'
        ]
      },
      {
        title: 'Doctor calendars',
        items: [
          'Review available slots by department',
          'Block unavailable doctor timings',
          'Reschedule cancelled appointments',
          'Create emergency buffer slots',
          'Monitor doctor overbooking risk',
          'Sync OPD schedules with department heads'
        ]
      },
      {
        title: 'Patient follow-up',
        items: [
          'Send confirmation updates',
          'Track missed appointments',
          'Create follow-up reminders after consultation',
          'Record cancellation reason and next available slot',
          'Route medical-record requests to reception',
          'Notify billing for paid appointment changes'
        ]
      },
      {
        title: 'Appointment status list',
        items: [
          'Requested - waiting for admin approval',
          'Confirmed - doctor and slot assigned',
          'Checked in - patient reached reception',
          'In consultation - doctor is attending',
          'Completed - visit closed with notes',
          'Cancelled or no-show - follow-up required'
        ]
      }
    ]
  },
  staff: {
    title: 'Staff management',
    kicker: 'Workforce planning',
    summary: 'Plan shift coverage for doctors, nurses, reception, lab, pharmacy, and support teams across the hospital.',
    stats: [
      { label: 'On shift', value: '74', note: 'Across all teams' },
      { label: 'Open gaps', value: '5', note: 'Evening coverage' },
      { label: 'Leave requests', value: '8', note: 'Awaiting approval' },
      { label: 'Overtime cases', value: '12', note: 'Need review' },
      { label: 'Training due', value: '16', note: 'Compliance modules' },
      { label: 'Backup pool', value: '9', note: 'Available today' }
    ],
    sections: [
      {
        title: 'Shift planning',
        items: [
          'Assign staff to wards and counters',
          'Review overtime and leave conflicts',
          'Prepare night shift coverage',
          'Create backup assignments for emergency load',
          'Publish morning, evening, and night rosters',
          'Check handover completion between shifts'
        ]
      },
      {
        title: 'Role coverage',
        items: [
          'Check nurse-to-patient ratios',
          'Verify lab and pharmacy staffing',
          'Track reception queue support',
          'Confirm ambulance desk availability',
          'Monitor housekeeping coverage by floor',
          'Review security and visitor desk staffing'
        ]
      },
      {
        title: 'Approvals',
        items: [
          'Approve schedule swaps',
          'Review leave requests',
          'Assign backup staff for critical units',
          'Approve overtime requests',
          'Review attendance exceptions',
          'Escalate repeated late check-ins'
        ]
      },
      {
        title: 'Staff categories',
        items: [
          'Doctors - consultants, residents, visiting specialists',
          'Nursing - ICU, ward, emergency, procedure room',
          'Reception - appointments, registration, patient help desk',
          'Diagnostics - lab technicians, radiology operators',
          'Pharmacy - dispensing counter, stock control',
          'Support - housekeeping, security, ambulance, maintenance'
        ]
      }
    ]
  },
  resources: {
    title: 'Resource management',
    kicker: 'Beds, stock, and billing',
    summary: 'Monitor bed availability, medical inventory, purchase orders, billing exceptions, and operational resource usage.',
    stats: [
      { label: 'Beds available', value: '36', note: '9 ICU, 27 general' },
      { label: 'Low stock', value: '14', note: '5 critical items' },
      { label: 'Pending bills', value: '$12.8K', note: 'Needs billing follow-up' },
      { label: 'Open orders', value: '6', note: 'Supplier confirmation due' },
      { label: 'Equipment checks', value: '18', note: 'Scheduled today' },
      { label: 'Claims pending', value: '27', note: 'Insurance queue' }
    ],
    sections: [
      {
        title: 'Bed allocation',
        items: [
          'Assign ICU and ward beds',
          'Track discharge-ready patients',
          'Reserve emergency capacity',
          'Monitor isolation room availability',
          'Coordinate bed cleaning turnaround',
          'Block beds for planned surgeries'
        ]
      },
      {
        title: 'Inventory control',
        items: [
          'Review low-stock medicines',
          'Approve purchase requests',
          'Track equipment maintenance',
          'Monitor oxygen, PPE, syringes, and IV fluids',
          'Audit expired medicine batches',
          'Record supplier delivery delays'
        ]
      },
      {
        title: 'Billing operations',
        items: [
          'Review unpaid invoices',
          'Resolve insurance claim issues',
          'Audit daily billing exceptions',
          'Approve refund and adjustment requests',
          'Track package billing for procedures',
          'Reconcile pharmacy and lab charges'
        ]
      },
      {
        title: 'Resource master list',
        items: [
          'Beds - ICU, general ward, private rooms, isolation rooms',
          'Equipment - ventilators, monitors, infusion pumps, wheelchairs',
          'Medical stock - oxygen, medicines, disposables, PPE',
          'Billing - invoices, receipts, insurance claims, refunds',
          'Vendors - pharmacy suppliers, equipment service, facility vendors',
          'Maintenance - biomedical checks, room repairs, cleaning requests'
        ]
      }
    ]
  },
  reports: {
    title: 'Reports and analytics',
    kicker: 'Admin insights',
    summary: 'Review hospital performance reports, financial summaries, utilization patterns, and operational trends.',
    stats: [
      { label: 'Reports ready', value: '12', note: 'For today' },
      { label: 'Revenue trend', value: '+12%', note: 'Month over month' },
      { label: 'Audit flags', value: '4', note: 'Need review' },
      { label: 'Exports queued', value: '5', note: 'PDF and CSV' },
      { label: 'Dashboards live', value: '8', note: 'Admin and clinical' },
      { label: 'Review meetings', value: '3', note: 'Scheduled today' }
    ],
    sections: [
      {
        title: 'Operational reports',
        items: [
          'Daily admissions and discharge report',
          'Department utilization summary',
          'Appointment completion report',
          'Bed occupancy and turnaround report',
          'Emergency wait-time report',
          'Doctor workload and OPD volume report'
        ]
      },
      {
        title: 'Finance reports',
        items: [
          'Revenue and collection summary',
          'Pending invoices report',
          'Insurance claim status report',
          'Department-wise billing summary',
          'Refund and adjustment register',
          'Pharmacy and diagnostics revenue split'
        ]
      },
      {
        title: 'Compliance reports',
        items: [
          'Staff attendance audit',
          'Inventory usage audit',
          'Patient record completion checks',
          'Consent and discharge documentation audit',
          'Medicine expiry and stock variance audit',
          'Incident and escalation review report'
        ]
      },
      {
        title: 'Export schedule',
        items: [
          '08:00 AM - daily operations summary',
          '11:00 AM - appointment and front desk queue',
          '02:00 PM - department utilization snapshot',
          '05:00 PM - billing and collection summary',
          '08:00 PM - staff attendance and shift closure',
          'Weekly - executive performance dashboard'
        ]
      }
    ]
  }
};
