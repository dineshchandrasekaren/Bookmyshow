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
import Plays from "./Pages/Plays.Pages";
import axios from "axios";

//default setting for axios
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_URL; 

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
        <MovieHOC path="/movie/:id" exact component={MoviePage}/>
        <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
