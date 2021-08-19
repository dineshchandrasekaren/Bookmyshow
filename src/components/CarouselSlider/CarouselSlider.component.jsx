import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.component";
import {settings} from "../../config/PosterCarouselSetting.config";

const CarouselSlider = (props) => {


    const CarouselContents = props.contents;
    return(
        <><div className="container mx-auto px-3 py-3 w-full">
            <Slider className="px-4" {...settings}>
                {CarouselContents.map(image=>(
                    <Poster src={image.src} title={image.title} subtitle={image.subtitle}  isDark={props.isDark} />
                ))}
            </Slider>
        </div>
        </>
    );

}
export default CarouselSlider;

