import React from "react";
import { useState,useEffect } from "react";

function AsyncComponent() {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        throw new Error("Async failed!");
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) throw error; 

  return <div>Data loaded successfully</div>;
}


export default AsyncComponent;