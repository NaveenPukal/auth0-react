import React from 'react';
import Login from '../components/Login';
import '../styles/LoginPage.css'; 
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-heading">Welcome Back!</h1>
        <p className="login-description">Please login with Auth0</p>
 

        <p className="login-description">
        <Login />
        </p>
     
      </div>
   
    </div>
  );
};

export default LoginPage;
