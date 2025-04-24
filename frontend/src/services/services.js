import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';  // Your backend API URL

// Login function
export const loginUser = (userData) => {
  return axios.post(`${API_URL}/Login`, userData);  // Send login request to backend
};

// Register function
export const registerUser = (userData) => {
  return axios.post(`${API_URL}/Register`, userData);  // Send registration request to backend
};

// Fetch user profile
export const getProfile = (token) => {
  return axios.get(`${API_URL}/Profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};
