import React, {useState} from 'react';
import Button from "../Button";
import PaymentComponent from "../PaymentModel/Payment.component";


const MovieContent = (props) =>{
    const [isOpen, setIsOpen]=useState(false);
    const [price, setPrice]=useState(false);
    const rentMovies = () => {
setIsOpen(true);
setPrice(149);
    }
 const buyMovies = () => {
setIsOpen(true);
setPrice(599);
    }


    return(<>
            <PaymentComponent isOpen={isOpen} setIsOpen={setIsOpen} price={price}/>
          <section className="flex gap-3 py-4 lg:py-0">
              <img className="w-24" src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere batch"/>
              <span className="bg-prem-100  text-xs rounded-xl px-1.5 py-0.5">Streaming Now</span>
          </section>
      <div className="flex flex-col gap-3  lg:flex-col-reverse">
          <section className="flex gap-2  w-full items-stretch">
              <button className="text-md text-gray-200 whitespace-nowrap font-medium w-full cursor-pointer bg-navbtn-400 py-2 px-10 rounded-md" onClick={rentMovies}>Rent ₹149</button>
              <button className="text-md text-gray-200 whitespace-nowrap font-medium w-full cursor-pointer bg-navbtn-400 py-2 px-10 rounded-md" onClick={buyMovies}>Buy ₹599</button>

          </section>
          <section className="flex flex-col gap-3 px-2 py-3 text-md ">
              <div className="flex gap-2 flex-col">
                  <h1 className="hidden lg:block py-3 text-3xl font-bold">{props.title}</h1>
                  <div className="flex gap-2 ">

                      <span>{props.language}  •  Languages:</span>
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
)};
export default MovieContent;