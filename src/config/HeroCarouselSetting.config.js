import {NextArrow, PrevArrow} from "../components/HeroCarousel/Arrows.component";
import React from "react";

const dot=(dots )=> (

    <div
        style={{
            borderRadius: "10px",
            padding: "10px"
        }}
    >
        <ul style={{ margin: "20px"}}>{dots}</ul>
    </div>
);
const customPage= (i)=> (
    <div
        style={{
            width: "8px",
            height:"8px",
            backgroundColor: "rgba(255,255,255,0.51)",
            borderRadius: "50%",
        }}
    >

    </div>
);
export const settingsLG = {
    accessibility:true,
    dots:true,
    arrows: true,
    centerMode: true,
    centerPadding: "26%",
    autoplay: true,
    InitialSlide:1,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dot,
    customPaging:customPage,
};
export const settings = {

    arrows: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dot,
    customPaging:customPage,
};
