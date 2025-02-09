import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
  
    navigate(appState?.returnTo || '/welcome'); 
  };

  const redirectUri = window.location.origin + '/welcome'; 

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN} 
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback} // Callback after login
      onLogin={(user) => dispatch(setUser(user))} // Set user in Redux state after login
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
