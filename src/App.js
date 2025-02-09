import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import AuthProvider from './auth/AuthProvider';

const App = () => {
  return (
    <Router> {/* Wrap everything with Router */}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
