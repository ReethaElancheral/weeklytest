import { Navigate, Outlet } from 'react-router-dom';

export default function RequireAuth() {
  const sessionUser = JSON.parse(localStorage.getItem('sessionUser'));

  if (!sessionUser) {
    
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
