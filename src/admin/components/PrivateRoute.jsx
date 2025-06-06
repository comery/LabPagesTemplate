import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>加载中...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default PrivateRoute;