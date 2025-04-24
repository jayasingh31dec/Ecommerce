import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      
      const response = await axios.post(
        `${API_BASE_URL}/api/users/register`,
        { name, email, password }
      );

      console.log('User registered:', response.data);

      localStorage.setItem('token', response.data.token);

      setMessage('Registration successful! Please log in.');
      setError('');

      
      navigate('/login');
    } catch (error) {
      setMessage('');
      setError(
        'Error registering user: ' +
        (error.response?.data?.message || error.message)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Register;
