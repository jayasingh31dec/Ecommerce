import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/services';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');  

      if (!token) {
        setError('Please log in to view your profile.');
        return;
      }

      try {
        const response = await getProfile(token);  // Pass token to getProfile
        setProfile(response.data);  // Set profile data
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError('Unauthorized. Please log in again.');
          navigate('/profile');  // Clear invalid token
          navigate('/login');  // Redirect to login page
        } else {
          setError('Failed to load profile. Please try again later.');
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="profile-container p-4">
      {profile ? (
        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Welcome, {profile.name}</h2>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
