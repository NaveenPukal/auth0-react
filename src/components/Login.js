import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Login.css'; 

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      redirectUri: window.location.origin + '/welcome', 
    });
  };

  return <button className="login-button" onClick={handleLogin}>Log In</button>;
};

export default Login;
