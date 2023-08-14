import React, { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isLoginCorrect, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoginCorrect);

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
