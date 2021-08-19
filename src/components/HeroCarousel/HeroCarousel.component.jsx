import React from "react";
import Slider from "react-slick";
import {settingsLG,settings} from "../../config/HeroCarouselSetting.config";



const HeroCarousel = () => {

  const images = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1534030665069-90e016e995e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];

  return (
    <>
      <div className="hidden lg:block overflow-hidden">
        <Slider {...settingsLG}>
          {images.map((image) => (
            <div className="focus:outline-none w-20 h-80 p-2 overflow-hidden">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:hidden overflow-hidden">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="focus:outline-none w-full h-80 py-2 md:px-1 overflow-hidden">
              {" "}
              <img
                src={image}
                alt="testing"
                className="w-full h-full  rounded"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroCarousel;
