import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../redux/slices/IngredientsSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../App.css";

const IngredientSearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const loading = useSelector((state) => state.ingredients.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState("A"); // Default to "A"

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigateToRecipes(searchTerm);
  };

  const navigateToRecipes = (term) => {
    const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredIngredients.length === 0) {
      navigate(`/no-recipe`);
    } else {
      navigate(`/recipes?ingredient=${term}&page=${currentPage}`);
    }
  };

  const handleIngredientClick = (ingredient) => {
    setSearchTerm(ingredient);
    navigateToRecipes(ingredient);
  };

  const generatePageLetters = () => {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
    }
    return letters;
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
  };

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.strIngredient
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="background-image">
        <div className="header-content">
          <Container className="text-center">
            <Row>
              <Col xs={12}>
                <Form className="search-form" onSubmit={handleSearch}>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search ingredients here..."
                    className="search-input"
                  />
                  <button
                    variant="outline-light"
                    className="search-button"
                    type="submit"
                  >
                    <FaSearch className="search-ingredient-button" />
                  </button>
                </Form>
                <div className="quote-container">
                 
                  <h2 className="personalize-text personalize-text-middle">
                    Cooking is an art, and we have the recipes to make you a
                    master artist
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="ingredient-list">
            {loading && <p>Loading...</p>}
            {!loading &&
              filteredIngredients
                .filter((ingredient) =>
                  ingredient.strIngredient
                    .toLowerCase()
                    .startsWith(selectedLetter.toLowerCase())
                )
                .map((ingredient) => (
                  <Col xs={12} key={ingredient.idIngredient} className="mb-4">
                    <div
                      className="ingredient-item"
                      onClick={() =>
                        handleIngredientClick(ingredient.strIngredient)
                      }
                    >
                      {ingredient.strIngredient}
                    </div>
                  </Col>
                ))}
          </Row>

          <div className="pagination">
            {generatePageLetters().map((letter, index) => (
              <button
                key={index}
                className={`pagination-button ${
                  selectedLetter === letter ? "active" : ""
                }`}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default IngredientSearchForm;
