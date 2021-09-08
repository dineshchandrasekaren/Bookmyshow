import React, {useContext, useEffect} from 'react';
import  {useParams} from 'react-router-dom';
import MovieNavBar from "../components/Navbar/MovieNavBar.component";
import MovieHero from "../components/MovieHero/MovieHero.component";
import axios from "axios";
import {MovieContext} from "../context/Movie.context";

const MovieLayout = (props) => {
    const {id}=useParams();
    const {setMovie}=useContext(MovieContext);
    useEffect(()=>{
        const requestMovie = async  () => {
          const getMovie=await  axios.get(`/movie/${id}`);
          setMovie(getMovie.data);
        }
        requestMovie();
    },[id]);
  return (
        <>
            <header>
                <MovieNavBar/>
                <MovieHero/>
            </header>
            {props.children}
        </>
    );
};

export  default  MovieLayout;