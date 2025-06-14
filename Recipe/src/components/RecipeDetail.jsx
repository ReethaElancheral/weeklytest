import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => {
        setRecipe(res.data.meals ? res.data.meals[0] : null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {Array.from({ length: 20 }).map((_, idx) => {
          const ingredient = recipe[`strIngredient${idx + 1}`];
          const measure = recipe[`strMeasure${idx + 1}`];
          return ingredient && ingredient.trim() ? (
            <li key={idx}>{measure} {ingredient}</li>
          ) : null;
        })}
      </ul>
      <Link to="/recipes" className="btn">Back to Recipes</Link>
    </div>
  );
}

export default RecipeDetail;
