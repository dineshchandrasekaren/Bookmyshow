import React from 'react';
import {Subtitle} from "../typography/Subtitle.typography";
import {Link} from "react-router-dom";
const Poster = (props) => {
    return (<Link to={`/movie/${props.id}`}>
            <div className={`flex flex-col ${props.isDark ? "text-white" : "text-gray"} gap-3 px-3`}>
                <div className="h-auto  cursor-pointer ">
                    <img className="w-full h-full rounded-xl" src={`https://image.tmdb.org/t/p/original/${props.src}`}
                         alt={props.title}/>
                </div>
                <div>
                    <h3 className="font-bold">{props.title}</h3>
                    <Subtitle subtitle={props.subtitle}/>
                </div>
            </div>
        </Link>
    )
};

export default Poster;