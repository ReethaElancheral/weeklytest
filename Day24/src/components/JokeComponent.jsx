import React, { useEffect, useState } from 'react';

export default function JokeComponent() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://official-joke-api.appspot.com/rand');

  

      if (!res.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data = await res.json();
      setJoke(data);
    } catch (err) {
      setError(err); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  if (error) throw error;

  if (loading) return <p>Loading joke...</p>;
  if (!joke) return null;

  return (
    <div>
      <h2>Here's a joke for you:</h2>
      <p><strong>{joke.setup}</strong></p>
      <p>{joke.punchline}</p>
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}
