import React from 'react';
import { Navigate } from 'react-router-dom';


const isLoggedIn = () => !!localStorage.getItem('userToken');

export default function withAuth(WrappedComponent) {
  return function AuthWrapper(props) {
    if (!isLoggedIn()) {
     
      return <Navigate to="/" replace />;
    }
    return <WrappedComponent {...props} />;
  };
}
