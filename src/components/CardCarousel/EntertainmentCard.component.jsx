import React from "react";
import Slider from "react-slick";
import {EntertainmentCardImage} from "../Database";
import {settings} from "../../config/PosterCarouselSetting.config";

export const EntertainmentCard = (props) => (
  <>

    <div className="w-full h-auto cursor-pointer px-2">
            <img className="w-full h-full rounded-xl" src={props.src} alt="cards" />
        </div>
        </>
);



export const EntertainmentCardSlider = () => {
    return (
        <>
           <div>
            <Slider className="px-5"  {...settings}>
                    {EntertainmentCardImage.map((image) =>
                    <EntertainmentCard  src={image}/>)}
                </Slider>
           </div>
        </>
    )
}

