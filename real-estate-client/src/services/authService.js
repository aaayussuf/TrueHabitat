import axios from 'axios';

const API_URL = 'https://api.example.com/auth';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const logout = () => {
  // Clear user session or token here
  localStorage.removeItem('token');
};
