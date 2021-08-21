import React from 'react';
import {Route} from "react-router-dom";
import MovieLayout from "../layout/MovieLayout.layout";

const MovieHOC = ({component: Component, ...rest}) => (
    <>
        <Route
            {...rest}
            component={(...props)=>(
                <MovieLayout>
                    <Component {...props}/>
                </MovieLayout>
            )}
        />

    </>
);

export  default  MovieHOC;