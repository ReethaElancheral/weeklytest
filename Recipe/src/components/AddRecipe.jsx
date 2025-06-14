
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddRecipe({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("All fields are required");
      return;
    }
    const newRecipe = { title, description };
    onAdd(newRecipe);
    navigate('/recipes');
  };

  return (
    <div className="add-recipe">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Add Recipe</button>
      </form>
    </div>
  );
}
