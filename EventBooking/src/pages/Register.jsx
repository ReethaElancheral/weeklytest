import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('All fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Enter a valid email');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

  
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));


    localStorage.setItem('sessionUser', JSON.stringify({ email }));

    alert('Registration successful! Redirecting to home...');
    navigate('/');  
    window.location.reload();

  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="book-btn">Register</button>
      </form>
    </div>
  );
}
