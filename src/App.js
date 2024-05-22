import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import IngredientSearchForm from './components/IngredientSearchForm.js';
import RecipeList from './components/RecipeList.js';
import RecipeDetails from './components/RecipeDetails.js';
import NoRecipeFound from './components/NoRecipeFound.js';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<IngredientSearchForm />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/no-recipe" element={<NoRecipeFound />} /> 
      </Routes>
    </Router>
  </Provider>
);

export default App;
