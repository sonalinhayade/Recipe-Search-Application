import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";


const NoRecipeFound = () => {
  return (
    <>
    <div className='no-recipe-found-container'>
      <h2>No Recipe Found</h2>
      <p>No recipes found for the given ingredient. Please try another search.</p>
    </div>
    <div className="home-button-container">
        <Link to="/" className="home-button">
        <MdHome className="home-icon"/>
        </Link>
      </div>
  </>
  );
 
};

export default NoRecipeFound;
