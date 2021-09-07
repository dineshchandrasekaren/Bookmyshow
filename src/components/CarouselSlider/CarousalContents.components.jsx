import React from 'react';
import {Title} from "../typography/Title.typography";
import {Subtitle} from "../typography/Subtitle.typography";
import {BiChevronRight} from "react-icons/bi";
import CarouselSlider from "./CarouselSlider.component";

export const CarousalContents = (props) => {
  return(
      <><section className={`${props.isDark?"my-auto":"my-14"}`}>
          <div className="flex items-center justify-between gap-2 px-12">
              <div className={`${props.isDark?"text-white":"text-gray"} `} >
                  <Title title={props.title}/>
                  <Subtitle className={`${props.isDone?"block":"hidden"} ${props.isDark?"text-white":"text-gray-500"}`} subtitle={props.subtitle}/>
              </div>
              <p className="text-navbtn-400 flex items-center  whitespace-nowrap cursor-pointer">See More <BiChevronRight/></p>
          </div>
          <CarouselSlider settings={props.settings} contents={props.content} isDark={props.isDark} />
      </section>
      </>
  )
}