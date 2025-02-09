import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../components/Logout';
import '../styles/WelcomePage.css'; 

const WelcomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const reduxUser = useSelector((state) => state.auth.user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
      return;
    }

    if (!isAuthenticated) {
      navigate('/');
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  const displayUser = reduxUser || user;

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-heading">Welcome, {displayUser?.name}</h1>
        
        <div className="user-info">
          <div className="profile-img">
            <img
              src={displayUser?.picture}
              alt={displayUser?.nickname}
              className="user-profile-img"
            />
          </div>

          <div className="user-details">
            <p><strong>Email:</strong> {displayUser?.email}</p>
            <p><strong>Nickname:</strong> {displayUser?.nickname}</p>
          </div>
        </div>

        <Logout />
      </div>
    </div>
  );
};

export default WelcomePage;
