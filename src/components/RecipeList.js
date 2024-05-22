import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/slices/RecipeSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { Form } from "react-bootstrap";

import "../App.css";

const RecipeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const recipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);
  const error = useSelector((state) => state.recipes.error);

  const queryParams = new URLSearchParams(location.search);
  const ingredient = queryParams.get("ingredient");

  useEffect(() => {
    if (ingredient) {
      dispatch(fetchRecipes(ingredient));
    }
  }, [dispatch, ingredient]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchRecipes(searchQuery));
  };

  const handleViewDetails = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="dark-background">
      <div className="header-list">
        <div className="home-button-container">
          <Link to="/" className="home-button">
            <MdHome className="home-icon" />
          </Link>
        </div>

        <Form className="search-form-list" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ingredients here..."
            className="search-input-list"
          />
          <button
            variant="outline-light"
            className="search-button-list"
            type="submit"
          >
            <FaSearch className="search-ingredient-list" />
          </button>
        </Form>
      </div>

      <div className="recipe-list-container">
        {loading && <p>Loading...</p>}
        {error && (
          <div>
            <p>Error: {error}</p>
          </div>
        )}
        {!ingredient || !recipes ? (
          <div className="no-recipe-found-container">
            <h2>No Recipe Found</h2>
            <p>
              No recipes found for the given ingredient. Please try another
              search.
            </p>
          </div>
        ) : (
          <div className="recipe-card-container">
            {recipes.map((recipe) => (
              <div key={recipe.idMeal} className="recipe-list-card">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="recipe-image"
                />
                <div className="recipe-details">
                  <h3 className="recipe-name">{recipe.strMeal}</h3>
                  <p className="recipe-description">{recipe.strDescription}</p>
                  <button
                    className="view-recipe-button"
                    onClick={() => handleViewDetails(recipe.idMeal)}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
