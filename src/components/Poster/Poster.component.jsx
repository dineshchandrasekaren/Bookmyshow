import React from 'react';
import {Subtitle} from "../typography/Subtitle.typography";
const Poster = (props) => (
  <>
  <div className={`flex flex-col ${props.isDark ? "text-white":"text-gray"} gap-3 px-3`}>
      <div className="h-auto  cursor-pointer ">
          <img className="w-full h-full rounded-xl" src={props.src} alt={props.title}/>
      </div>
      <div>
      <h3 className="font-bold">{props.title}</h3>
      <Subtitle subtitle={props.subtitle}/>
      </div>
  </div>
  </>
);

export default Poster;