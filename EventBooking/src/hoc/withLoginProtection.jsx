
import { Navigate } from 'react-router-dom';

const withLoginProtection = (Component) => {
  const isLoggedIn = localStorage.getItem('user'); 
  return isLoggedIn ? Component : <Navigate to="/" />;
};

export default withLoginProtection;
