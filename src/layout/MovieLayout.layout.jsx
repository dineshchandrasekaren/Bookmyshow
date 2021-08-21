import React from 'react';
import MovieNavBar from "../components/Navbar/MovieNavBar.component";
import MovieHero from "../components/MovieHero/MovieHero.component";

const MovieLayout = (props) => (
    <>
        <header>
        <MovieNavBar/>
            <MovieHero/>
        </header>
        {props.children}
    </>
);

export  default  MovieLayout;