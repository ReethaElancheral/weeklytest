
import React, { useState } from 'react';

function Login({ onClose, onLoginSuccess }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  function validate() {
    const errors = {};
    if (!form.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Email is invalid";
    if (!form.password) errors.password = "Password is required";
    return errors;
  }

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === form.email);
    if (!user) {
      setErrors({email: "Email is not registered"});
      return;
    }
    if (user.password !== form.password) {
      setErrors({password: "Incorrect password"});
      return;
    }
    alert("Login successful!");
    setErrors({});
    onLoginSuccess(user); 
    onClose();            
  }

  return (
    <div className="modal">
      <button onClick={onClose} className="close-btn">&times;</button>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
