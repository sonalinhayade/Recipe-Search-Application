import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../redux/slices/IngredientsSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "../App.css";

const IngredientSearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const loading = useSelector((state) => state.ingredients.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1223px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../redux/slices/IngredientsSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "../App.css";

const IngredientSearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const loading = useSelector((state) => state.ingredients.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1223px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigateToRecipes(searchTerm);
  };

  const navigateToRecipes = (term) => {
    const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(term.toLowerCase())
    );
    if (filteredIngredients.length === 0) {
      navigate(`/no-recipe`);
    } else {
      navigate(`/recipes?ingredient=${term}&page=1`);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm(""); 
  };

  const handleArrowClick = (direction) => {
    const currentIndex = selectedLetter.charCodeAt(0) - 65;
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + 26) % 26
        : (currentIndex + 1) % 26;
    setSelectedLetter(String.fromCharCode(65 + newIndex));
    setSearchTerm(""); 
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../redux/slices/IngredientsSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "../App.css";

const IngredientSearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const loading = useSelector((state) => state.ingredients.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1223px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigateToRecipes(searchTerm);
  };

  const navigateToRecipes = (term) => {
    const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(term.toLowerCase())
    );
    if (filteredIngredients.length === 0) {
      navigate(`/no-recipe`);
    } else {
      navigate(`/recipes?ingredient=${term}&page=1`);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm(""); 
  };

  const handleArrowClick = (direction) => {
    const currentIndex = selectedLetter.charCodeAt(0) - 65;
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + 26) % 26
        : (currentIndex + 1) % 26;
    setSelectedLetter(String.fromCharCode(65 + newIndex));
    setSearchTerm(""); 
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../redux/slices/IngredientsSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "../App.css";

const IngredientSearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const loading = useSelector((state) => state.ingredients.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1223px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigateToRecipes(searchTerm);
  };

  const navigateToRecipes = (term) => {
    const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(term.toLowerCase())
    );
    if (filteredIngredients.length === 0) {
      navigate(`/no-recipe`);
    } else {
      navigate(`/recipes?ingredient=${term}&page=1`);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm(""); 
  };

  const handleArrowClick = (direction) => {
    const currentIndex = selectedLetter.charCodeAt(0) - 65;
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + 26) % 26
        : (currentIndex + 1) % 26;
    setSelectedLetter(String.fromCharCode(65 + newIndex));
    setSearchTerm(""); 
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (

    navigateToRecipes(searchTerm);
  };

  const navigateToRecipes = (term) => {
    const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(term.toLowerCase())
    );
    if (filteredIngredients.length === 0) {
      navigate(`/no-recipe`);
    } else {
      navigate(`/recipes?ingredient=${term}&page=1`);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm(""); 
  };

  const handleArrowClick = (direction) => {
    const currentIndex = selectedLetter.charCodeAt(0) - 65;
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + 26) % 26
        : (currentIndex + 1) % 26;
    setSelectedLetter(String.fromCharCode(65 + newIndex));
    setSearchTerm(""); 
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={i} className="highlight">
              {part}
            </b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const filteredIngredients = ingredients.filter((ingredient) =>
    searchTerm
      ? ingredient.strIngredient
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      : ingredient.strIngredient
          .toLowerCase()
          .startsWith(selectedLetter.toLowerCase())
  );

  return (
    <>
      <div className="background-image">
        <div className="header-content">
          <Container className="text-center">
            <Row>
              <Col xs={12}>
                <Form className="search-form" onSubmit={handleSearch}>
                  <div className="search-container">
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
                  </div>
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
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <div className="scrollable-card">
                <Row className="ingredient-list">
                  {loading && <p>Loading...</p>}
                  {!loading &&
                    filteredIngredients.map((ingredient) => (
                      <Col
                        xs={12}
                        key={ingredient.idIngredient}
                        className="mb-4"
                      >
                        <div
                          className="ingredient-item"
                          onClick={() =>
                            navigateToRecipes(ingredient.strIngredient)
                          }
                        >
                          {getHighlightedText(
                            ingredient.strIngredient,
                            searchTerm
                          )}
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>
          </Row>
          <div className="pagination">
            {isDesktopOrLaptop && (
              <div className="alphabet-pagination">
                {Array.from({ length: 26 }, (_, i) =>
                  String.fromCharCode(65 + i)
                ).map((letter) => (
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
              </div>
            )}
            {isTablet && (
              <div className="alphabet-pagination">
                {Array.from({ length: 26 }, (_, i) =>
                  String.fromCharCode(65 + i)
                ).map((letter) => (
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
              </div>
            )}
            {isMobile && (
              <div className="arrow-pagination">
                <button
                  className="pagination-arrow"
                  onClick={() => handleArrowClick("left")}
                >
                  <FaArrowLeft />
                </button>
                <span className="selected-letter">{selectedLetter}</span>
                <button
                  className="pagination-arrow"
                  onClick={() => handleArrowClick("right")}
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default IngredientSearchForm;
