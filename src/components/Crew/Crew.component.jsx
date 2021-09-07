import React from 'react';

const Crew = (props) => (
    <>
    <div className="flex flex-col items-center my-3">
        <div className="w-32 h-32 ">
            <img className="w-full h-full rounded-full" src={`https://image.tmdb.org/t/p/original/${props.src}`} alt="crew"/>
        </div>
        <h3 className="text-lg  font-medium text-gray-800 " >{props.cast}</h3>
        <p className="text-gray-500">as {props.role}</p>
    </div>
    </>
);

export default Crew;