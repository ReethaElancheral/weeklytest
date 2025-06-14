import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(res => {
        setRecipes(res.data.meals || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (!recipes.length) return <p>No recipes found.</p>;

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.idMeal}>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <Link className="btn" to={`/recipes/${recipe.idMeal}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
