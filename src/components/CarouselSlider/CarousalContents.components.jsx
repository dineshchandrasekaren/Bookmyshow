import React from 'react';
import {Title} from "../typography/Title.typography";
import {Subtitle} from "../typography/Subtitle.typography";
import {BiChevronRight} from "react-icons/bi";
import CarouselSlider from "./CarouselSlider.component";

export const CarousalContents = (props) => {
  return(
      <><div className={`${props.isDark?"my-auto":"my-14"}`}>
          <div className="flex items-center justify-between px-12">
              <div className={`${props.isDark?"text-white":"text-grey"} `} >
                  <Title title={props.title}/>
                  <Subtitle className={`${props.isDone?"block":"hidden"}`} subtitle={props.subtitle}/>
              </div>
              <p className="text-navbtn-400 flex items-center whitespace-nowrap">See More <BiChevronRight/></p>
          </div>
          <CarouselSlider contents={props.content} isDark={props.isDark} />
      </div>
      </>
  )
}