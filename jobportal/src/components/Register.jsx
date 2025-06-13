
import React, { useState } from 'react';

function Register({ onClose }) {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  function validate() {
    const errors = {};
    if (!form.username.trim()) errors.username = "Username is required";
    if (!form.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Email is invalid";
    if (!form.password) errors.password = "Password is required";
    else if (form.password.length < 8) errors.password = "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword) errors.confirmPassword = "Passwords do not match";
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
    if(users.find(u => u.email === form.email)) {
      setErrors({email: "Email already registered"});
      return;
    }
    users.push({ username: form.username, email: form.email, password: form.password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registered successfully!");
    setForm({ username: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
    onClose();  
  }

  return (
    <div className="modal">
      <button onClick={onClose} className="close-btn">&times;</button>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
        {errors.username && <p className="error">{errors.username}</p>}

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
