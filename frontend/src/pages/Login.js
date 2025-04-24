import React, { useState } from 'react';
import { loginUser } from '../services/services'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await loginUser({ email, password });

      if (response.status === 200 && response.data.token) {
      
        localStorage.setItem('token', response.data.token);

      
        setMessage('Login successful! Redirecting...');
        
        // Redirect after a short delay
        setTimeout(() => {
          navigate('/profile');
        }, 1000);
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {message && (
        <div className="mt-3 alert alert-info">
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;
