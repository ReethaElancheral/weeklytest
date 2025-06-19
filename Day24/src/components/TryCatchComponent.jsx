import React, { useState } from 'react';

export default function TryCatchComponent() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = () => {
    try {
     
      const shouldThrow = true;
      if (shouldThrow) {
        throw new Error('Something went wrong in the button click!');
      }

    
      alert('Success!');
    } catch (err) {
      setErrorMessage(err.message); 
      console.error('Caught error:', err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Try-Catch in Event Handler</h2>
      <button onClick={handleClick}>Click to Trigger Error</button>

      {errorMessage && (
        <p style={{ color: 'red', marginTop: 10 }}>Error: {errorMessage}</p>
      )}
    </div>
  );
}
