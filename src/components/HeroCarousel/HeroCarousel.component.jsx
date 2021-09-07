import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import { settingsLG, settings } from "../../config/HeroCarouselSetting.config";


const HeroCarousel = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlaying = async () => {
      const getNowPlaying = await axios.get('/movie/now_playing');
      setImages(getNowPlaying.data.results);
    }
    requestNowPlaying();
  });

  return (
    <>
      <div className="hidden lg:block overflow-hidden">
        <Slider {...settingsLG}>
          {images.map((image) => (

            <div className="focus:outline-none w-20 h-80 p-2 overflow-hidden">

              <img
                src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`}
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

              <img
                src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}` }
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
