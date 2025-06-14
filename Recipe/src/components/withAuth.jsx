import React from 'react';
import { Navigate } from 'react-router-dom';

export function withAuth(Component) {
  return function WrappedComponent(props) {
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return <Component {...props} />;
  };
}
