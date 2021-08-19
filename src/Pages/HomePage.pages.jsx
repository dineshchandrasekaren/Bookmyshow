import React from 'react'
import { EntertainmentCardSlider } from '../components/CardCarousel/EntertainmentCard.component';
import {Title} from "../components/typography/Title.typography";
import {CarousalContents} from "../components/CarouselSlider/CarousalContents.components";
import {Database} from "../components/Database";
export const HomePage = () => (
    <>
        <div className="container mx-auto p-5">
<Title className="my-3 mx-5" title="The Best of Entertainment"/>
         <EntertainmentCardSlider/>
        </div>
        <div className="bg-prem-100 py-5">
            <div className="flex justify-between bg-prem-100 p-8">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="rupay" />
            </div>
            <CarousalContents title="Premiere" isDone={true} subtitle="Brand new releases every Friday" content={Database} isDark={true} />
        </div>
        <CarousalContents content={Database} isDone={false} isDark={false} title="Online Streaming Events"/>
        <CarousalContents content={Database} isDone={false} isDark={false} title="Outdoor Events"/>
        <CarousalContents content={Database} isDone={false} isDark={false} title="Popular Events"/>
    </>
);

