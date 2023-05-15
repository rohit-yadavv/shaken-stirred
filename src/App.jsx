import React from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CocktailsPage from "./CocktailsPage";
import SingleDrink from "./SingleDrink";
import ErrorPage from "./ErrorPage";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/detail/:id" element={<SingleDrink />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
