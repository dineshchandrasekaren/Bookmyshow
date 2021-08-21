import React from 'react';
import Button from "../Button";

const MovieContent = (props) => (
  <>

          <section className="flex gap-3 py-4 lg:py-0">
              <img className="w-24" src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere batch"/>
              <span className="bg-prem-100  text-xs rounded-xl px-1.5 py-0.5">Streaming Now</span>
          </section>
      <div className="flex flex-col gap-3  lg:flex-col-reverse">
          <section className="flex gap-2  w-full items-stretch">
              <Button price={props.rent}/>
              <Button price={props.buy}/>
          </section>
          <section className="flex flex-col gap-3 px-2 py-3 text-md ">
              <div className="flex gap-2 flex-col">
                  <h1 className="hidden lg:block py-3 text-3xl font-bold">{props.title}</h1>
                  <div className="flex gap-2 ">

                      <span>English  •  Languages:</span>
                      <span className="text-navbtn-300 cursor-pointer">Audio(1), Subtitles(1)</span>
                  </div>
              </div>

              <div>
                  <span>{props.duration}</span>
              </div>
              <div className="lg:hidden">{props.description}</div>

          </section>
      </div>
  </>
)
export default MovieContent;