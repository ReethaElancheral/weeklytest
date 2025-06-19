import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error("Count reached 5! Crashing intentionally.");
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
