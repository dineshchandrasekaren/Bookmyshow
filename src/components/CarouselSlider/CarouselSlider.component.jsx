import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.component";


const CarouselSlider = (props) => {


    const CarouselContents = props.contents;
    return(
        <><div className="container mx-auto px-3 py-3 w-full">
            <Slider className="px-4" {...props.settings}>
                {CarouselContents.map(image=>(
                    <Poster src={image.poster_path} title={image.title} subtitle={image.original_language} id={image.id}  isDark={props.isDark} />
                ))}
            </Slider>
        </div>
        </>
    );

}
export default CarouselSlider;

