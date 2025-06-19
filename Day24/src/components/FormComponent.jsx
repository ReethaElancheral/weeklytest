import React, { useState } from 'react';

export default function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState(null);

  if (formError) {
    throw new Error(formError); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setFormError('All fields are required to submit the form.');
      return;
    }

    alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit" style={{ marginTop: 15 }}>Submit</button>
    </form>
  );
}
