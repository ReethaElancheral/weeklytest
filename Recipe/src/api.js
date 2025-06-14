import axios from 'axios';

const API_BASE = 'https://jsonplaceholder.typicode.com'; 


export const fetchRecipes = () => axios.get(`${API_BASE}/posts?_limit=10`);

export const fetchRecipeById = (id) => axios.get(`${API_BASE}/posts/${id}`);

export const addRecipe = (recipeData) => axios.post(`${API_BASE}/posts`, recipeData);
