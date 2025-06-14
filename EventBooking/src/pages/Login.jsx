import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!email || !password) {
      alert('All fields are required');
      return;
    }

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      alert('Invalid credentials');
      return;
    }

  localStorage.setItem('sessionUser', JSON.stringify({ email }));
    alert('Login successful');
    navigate('/');
    window.location.reload(); 
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="book-btn">Login</button>
      </form>
    </div>
  );
}
