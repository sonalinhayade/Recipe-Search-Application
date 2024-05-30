import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../redux/slices/IngredientsSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../App.css";

const IngredientSearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const loading = useSelector((state) => state.ingredients.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");

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
      navigate(`/recipes?ingredient=${term}&page=1`);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().startsWith(searchTerm.toLowerCase())
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
                        navigateToRecipes(ingredient.strIngredient)
                      }
                    >
                      {ingredient.strIngredient}
                    </div>
                  </Col>
                ))}
          </Row>
          <div className="pagination">
            {/* Left arrow */}
            <FaArrowLeft
              className="pagination-arrow"
              onClick={() => {
                // Handle left arrow click
              }}
            />
            {/* Letters */}
            {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
              .filter((letter) =>
                filteredIngredients.some((ingredient) =>
                  ingredient.strIngredient
                    .toLowerCase()
                    .startsWith(letter.toLowerCase())
                )
              )
              .map((letter) => (
                <button
                  key={letter}
                  className={`pagination-button ${
                    selectedLetter === letter ? "active" : ""
                  }`}
                  onClick={() => handleLetterClick(letter)}
                >
                  {letter}
                </button>
              ))}
            {/* Right arrow */}
            <FaArrowRight
              className="pagination-arrow"
              onClick={() => {
                // Handle right arrow click
              }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default IngredientSearchForm;
