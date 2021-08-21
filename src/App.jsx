import React from "react";
import "./App.css";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// CSS Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import { HomePage } from "./Pages/HomePage.pages";
import MovieHOC from "./HOC/Movie.HOC";
import MoviePage from "./Pages/MoviePage.pages";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
        <MovieHOC path="/movie/:id" exact component={MoviePage}/>
    </>
  );
}

export default App;
