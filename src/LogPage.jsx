import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';

const LogPage = () => {
  const isLoggedIn = !!localStorage.getItem('access_token');
  console.log(localStorage.getItem('access_token'))

  return (
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </div>

  );
};

export default LogPage;
