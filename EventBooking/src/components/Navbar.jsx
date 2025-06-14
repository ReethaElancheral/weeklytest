import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
    setUser(sessionUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('sessionUser');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-links" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
