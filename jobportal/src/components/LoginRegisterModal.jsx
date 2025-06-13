import React, { useState } from 'react';
import Portal from './Portal';

export default function LoginRegisterModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = (e) => {
    e.preventDefault();
    
    if (username && password) {
      localStorage.setItem('userToken', 'fake-token');
      alert(`${isLogin ? 'Logged in' : 'Registered'} successfully!`);
      onClose();
    } else {
      alert('Enter username and password');
    }
  };

  return (
    <Portal>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>{isLogin ? 'Login' : 'Register'}</h3>
          <form onSubmit={handleAuth}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              className="link-btn"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Portal>
  );
}
