import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Logout.css';
const Logout = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin + '/',  
    });
  };

  return <button className="logout-button" onClick={handleLogout}>Log Out</button>;
};

export default Logout;
