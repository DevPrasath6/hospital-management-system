const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || 'API request failed.');
  }

  return payload;
}

export const api = {
  signup: (data) => request('/users/signup', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  login: (data) => request('/users/login', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  createAppointment: (data) => request('/appointments', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  createContact: (data) => request('/contacts', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  getUsers: () => request('/users'),
  updateUser: (id, data) => request(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  deleteUser: (id) => request(`/users/${id}`, {
    method: 'DELETE'
  }),
  getAppointments: () => request('/appointments'),
  updateAppointment: (id, data) => request(`/appointments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  deleteAppointment: (id) => request(`/appointments/${id}`, {
    method: 'DELETE'
  }),
  getContacts: () => request('/contacts'),
  updateContact: (id, data) => request(`/contacts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  deleteContact: (id) => request(`/contacts/${id}`, {
    method: 'DELETE'
  })
};
