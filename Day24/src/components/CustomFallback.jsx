function CustomFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Custom Error Handler</h2>
     <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

export default CustomFallback;