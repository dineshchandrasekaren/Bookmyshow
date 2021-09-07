import React,{useState,useEffect} from 'react'
import { EntertainmentCardSlider } from '../components/CardCarousel/EntertainmentCard.component';
import {Title} from "../components/typography/Title.typography";
import {CarousalContents} from "../components/CarouselSlider/CarousalContents.components";
import {settings} from "../config/PosterCarouselSetting.config";
import axios from "axios";

export const HomePage = () => {
    const [Popular,setPopular]=useState([]);
    const [TopRated,setTopRated]=useState([]);
    const [Upcoming,setUpcoming]=useState([]);

    useEffect(()=>{
        const requestPopular=async ()=>{
            const getPopular=await axios.get("/movie/popular");
            setPopular(getPopular.data.results);
        }
        requestPopular();
    },[]);
    useEffect(() => {
        const requestTopRated = async () => {
            const getTopRated = await axios.get("/movie/top_rated");
            setTopRated(getTopRated.data.results);
        }
        requestTopRated();
    },[]);
    useEffect(() => {
        const requestUpcoming = async () => {
            const getUpcoming = await axios.get("/movie/upcoming");
            setUpcoming(getUpcoming.data.results);
        }
        requestUpcoming();
    },[]);



    return (<>
     <main>
            <section className="container mx-auto p-5">
                <Title className="my-3 mx-5" title="The Best of Entertainment"/>
                <EntertainmentCardSlider/>
            </section>
            <section className="bg-prem-100 py-5">
                <div className="flex justify-between bg-prem-100 p-8">
                    <img
                        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                        alt="rupay"/>
                </div>
                <CarousalContents settings={settings} title="Premiere" isDone={true}
                                  subtitle="Brand new releases every Friday" content={Popular} isDark={true}/>
            </section>
            <CarousalContents settings={settings} content={TopRated} isDone={false} isDark={false}
                              title="Top Rated Movies"/>
            <CarousalContents settings={settings} content={Upcoming} isDone={false} isDark={false}
                              title="Upcoming Movies"/>

        </main>
    </>)
};

