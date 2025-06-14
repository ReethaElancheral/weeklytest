
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">🍲 RecipeBook</Link>
      <div className="nav-links">
        <Link to="/recipes">Home</Link>
        {user && <Link to="/add">Add Recipe</Link>}
        {user ? (
          <>
            <span>Hello, {user.username}</span>
            <button onClick={handleLogout} className="btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
