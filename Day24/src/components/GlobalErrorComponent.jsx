import React from "react";

function GlobalErrorComponent() {
  const [error, setError] = React.useState(null);

  const handleError = () => {
    try {
      throw new Error("Global error!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={handleError}>Throw Error</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default GlobalErrorComponent;