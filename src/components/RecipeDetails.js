import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../redux/slices/RecipeDetails";
import { GiCheckMark } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { MdHome } from "react-icons/md";



const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const meal = useSelector((state) => state.recipeDetails.selectedRecipe);
  const loading = useSelector((state) => state.recipeDetails.loading);

  useEffect(() => {
    dispatch(fetchRecipeDetails(id));
  }, [dispatch, id]);

  if (loading || !meal) {
    return <p>Loading...</p>;
  }

  const { strMeal, strInstructions, strCategory, strMealThumb, strYoutube } =
    meal;

  const instructions = strInstructions
    .split(".")
    .filter(
      (instruction) =>
        instruction.trim() !== "" && !/^\d/.test(instruction.trim())
    );

  return (
    <div className="dark-background">
      <div className="home-button-container">
        <Link to="/" className="home-button">
        <MdHome className="home-icon"/>
        </Link>
      </div>
      <div className="recipe-details-container">
        <div className="recipe-card recipe-image-card">
          <img src={strMealThumb} alt={strMeal} className="recipe-image" />
          <div className="recipe-info">
            <h2>{strMeal}</h2>
            <div className="category-youtube-container">
              <p className="category">Category: {strCategory}</p>
              <div className="youtube-card">
                <p className="youtube">
                  <a href={strYoutube} className="category-youtube-container">
                    <IoLogoYoutube className="youtube-icon"/>
                    Cook With Us!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="instruction-text">
      <div className="recipe-card instructions-card">
        <h3>Instructions</h3>
        {instructions.map((instruction, index) => (
          <div key={index} className="instruction">
            <GiCheckMark className="tick-icon" />
            {instruction.trim()}
          </div>
        ))}
      </div>
      <div className="recipe-ingredients-card">
        <h3>Ingredients</h3>
        <ul className="ingredient-list-details ingredient-container">
          {Object.keys(meal)
            .filter((key) => key.startsWith("strIngredient") && meal[key])
            .map((key, index) => (
              <li key={index}>
                <GiCheckMark className="tick-icon" />
                {meal[key]}
              </li>
            ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
