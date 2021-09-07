import React from 'react';
import Poster from "../components/Poster/Poster.component";
import {PlayContents} from "../components/Database";
import {Title} from "../components/typography/Title.typography";
import FilterPlay from '../components/FilterPlay/FilterPlay.component';

const Plays = () =>(
  <>

        <div className="flex justify-end bg-prem-300">
           
            <div>
                <Title className="hidden lg:block ml-10 mt-4" title="Filter"/>
            <div className=" hidden lg:block w-96 h-10 mt-2 py-4 flex flex-col px-10 ">

                    <div className="mb-2">
                        <FilterPlay title="Date" panel={["Today", "Tomorrow","This weekend"]} />
                    </div>
                    <div className="mb-2">
                        <FilterPlay title="Language" panel={["Tamil", "English","Telugu","Hindi","Kannada"]} />
                    </div>
                    <div className="mb-2">
                        <FilterPlay title="Categories" panel={["Theatre"]} />
                    </div>
                    <div className="mb-2">
                        <FilterPlay title="Genres" panel={["Drama", "Comedy","Historical","Online Streaming Plays","Adaption"]} />
                    </div>
                 <div className="mb-2">
                        <FilterPlay title="More Filter" panel={["Online Streaming", "Kids Allowed","Outdoor Events"]} />
                    </div>
                 <div className="mb-2">
                        <FilterPlay title="Price" panel={["Free", "0 - 500","500 - 2000","Above 2000"]} />
                    </div>
                 
            </div>
        </div>
            

          <div className="flex flex-wrap mx-2 lg:m-0 lg:w-3/4">
              <Title className="w-full  ml-2 mt-4" title="Plays in Chennai"/>
              {PlayContents.map(image=>(
                  <div className="md:w-56 w-48 my-4">
                      <Poster src={image.url} title={image.title} subtitle={image.subtitle} isDark={false}/>
                  </div>

              ))}

            </div>
            
      </div>

  </>
);
export  default Plays;