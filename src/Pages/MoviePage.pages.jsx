import React, {useEffect, useState} from 'react';
import {FaCcApplePay, FaCcVisa} from "react-icons/fa";
import {Title} from "../components/typography/Title.typography";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import Crew from "../components/Crew/Crew.component";
import {settings} from "../config/Crew.config";
import {CarousalContents} from "../components/CarouselSlider/CarousalContents.components";
import {settingssm} from "../config/PosterCarouselSetting.config";
import axios from "axios";


const MoviePage = () => {
    const {id}=useParams();
    const [casts ,setCasts]=useState([]);
    const [similarMovies ,setSimilarMovies]=useState([]);
    const [nowPlaying ,setNowPlaying]=useState([]);
    useEffect(()=>{
       const requestCast=async ()=>{
           const getCasts=await  axios.get(`/movie/${id}/credits`)
           setCasts(getCasts.data.cast);
       }
       requestCast();
    },[id]);
    useEffect(()=>{
       const requestSimilarMovies=async ()=>{
           const getSimilarMovies=await  axios.get(`/movie/${id}/similar`)
           setSimilarMovies(getSimilarMovies.data.results);
       }
       requestSimilarMovies();
    },[id]);
    useEffect(()=>{
        const requestNowPlaying=async ()=>{
            const getNowPlaying=await  axios.get(`/movie/${id}/recommendations`)
            setNowPlaying(getNowPlaying.data.results);
        }
        requestNowPlaying();
    },[id]);

    return(
    <>
        <main className="md:w-2/3 mx-8 lg:ml-20 my-5">
            <div>
                <Title title="Applicable offers"/>
                <div className="flex gap-5 flex-wrap lg:flex-nowrap mt-4">
                    <div className="flex gap-2 p-3 bg-yellow-100 rounded-lg border-dashed border-2 border-yellow-400">
                        <div className="w-5 h-5 mt-1">
                            <FaCcVisa className="w-full h-full"/>
                        </div>
                        <div>
                            <h4 className="text-gray-800 text-xl font-bold">Visa Stream Offer</h4>
                            <p className="text-gray-600">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                                Stream.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 p-3 bg-yellow-100 rounded-lg border-dashed border-2 border-yellow-400">
                        <div className="w-6 h-6 mt-1">
                            <FaCcApplePay className="w-full h-full"/>
                        </div>
                        <div>
                            <h4 className="text-gray-800 text-xl font-bold">Filmy Pass</h4>
                            <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                                Pass @Rs.99.</p>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <hr/>
                </div>

            </div>
            <Title title="Cast & crew"/>
            <Slider  className="flex" {...settings}>
                {casts.map(cast=>(
                    <Crew src={cast.profile_path} cast={cast.original_name} role={cast.character} />
                ))}
            </Slider>
            <div className="my-2">
                <hr/>
            </div>
            <div className="-ml-10 lg:-ml-14 md:-mr-10">
                <CarousalContents settings={settingssm} content={similarMovies} isDone={false} isDark={false} title="You Might Also Like"/>
            </div>

            <div className="-ml-10 lg:-ml-14 md:-mr-10">
                <CarousalContents settings={settingssm} content={nowPlaying} isDone={false} isDark={false} title="BMS XCLUSIVE"/>
            </div>

        </main>

    </>
)};

export default MoviePage;