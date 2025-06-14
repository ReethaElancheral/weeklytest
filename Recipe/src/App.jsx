import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from './components/AddRecipe';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem('loggedInUser'));
  });

  const [recipes, setRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem('recipes')) || [];
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleLogin = (user) => {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  const handleAddRecipe = (recipe) => {
    const updated = [...recipes, { ...recipe, id: Date.now() }];
    setRecipes(updated);
  };

  return (
    <BrowserRouter>
      <Navbar user={loggedInUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route
          path="/add"
          element={
            loggedInUser ? (
              <AddRecipe onAdd={handleAddRecipe} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
