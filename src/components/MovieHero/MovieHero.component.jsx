import React from "react";
import MovieContent from "./MovieContent.component";
import {BiShare} from "react-icons/bi";

const MovieHero = () => (
    <>
        {/*small devices*/}
        <div className="md:hidden relative" style={{height: "calc(180vw)"}}>
            <img className="h-full w-full"
                 src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-secret-dare-to-dream-et00129015-12-08-2021-10-40-06.jpg"
                 alt="background"/>
            <div className="absolute bottom-0 left-0 w-full z-10 text-white p-4" style={{
                height: "auto",
                backgroundImage: " linear-gradient(180deg, rgba(0,0,0,0.31416316526610644) 0%, rgba(0,0,0,0.5746673669467788) 2%, rgba(0,0,0,0.6923144257703081) 8%, rgba(1,9,10,0.8015581232492998) 11%, rgba(1,12,14,1) 32%)"
            }}>


                <MovieContent duration="4h 1m  •  Action, Adventure, Fantasy  •  16+  •  18 Mar, 2021" description="Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans." rent="Rent ₹149" buy="Buy ₹269"/>
            </div>


        </div>

        {/*medium devices*/}
        <div className="hidden md:block lg:hidden relative" style={{height: "calc(100vw)"}}>
            <img className="h-full w-full"
                 src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-secret-dare-to-dream-et00129015-12-08-2021-10-40-06.jpg"
                 alt="background"/>
            <div className="absolute bottom-0 left-0 w-full z-10 text-white p-4" style={{
                height: "auto",
                backgroundImage: " linear-gradient(180deg, rgba(0,0,0,0.31416316526610644) 0%, rgba(0,0,0,0.5746673669467788) 2%, rgba(0,0,0,0.6923144257703081) 8%, rgba(1,9,10,0.8015581232492998) 11%, rgba(1,12,14,1) 32%)"
            }}>


                <MovieContent duration="4h 1m  •  Action, Adventure, Fantasy  •  16+  •  18 Mar, 2021" description="Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans." rent="Rent ₹149" buy="Buy ₹269"/>
            </div>


        </div>

        {/*large devices*/}
        <div className="hidden lg:block overflow-hidden relative" style={{height: "calc(40vw)"}}>
            <div className="w-full h-full z-10 absolute " style={{
                backgroundImage:
                    "linear-gradient(90deg, rgb(34, 34, 34,.99) 24.97%, rgb(34, 34, 34,.99) 45.3%, rgba(34, 34, 34, .6) 97.47%, rgb(34, 34, 34) 100%)",
            }}/>

            <div className="flex w-11/12 absolute inset-y-10 left-20 z-30 items-center gap-10 text-white">
                <div className="w-72 rounded-xl overflow-hidden">
                    <img className="w-full h-full" src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-secret-dare-to-dream-et00129015-12-08-2021-10-40-06.jpg" alt="poster" />
                </div>
                <div>
                    <MovieContent duration="4h 1m  •  Action, Adventure, Fantasy  •  16+  •  18 Mar, 2021"
                                  rent="Rent ₹149"
                                  buy="Buy ₹269"
                                  title="Loosu Mahishini"/>
                </div>
                <p className=" flex items-center gap-3 text-xl absolute right-6 top-3 bg-prem-200 px-5 py-3 font-light cursor-pointer rounded">

                    <BiShare className="font-medium text-2xl"/>
                    Share
                </p>
            </div>

            <img
                src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-secret-dare-to-dream-et00129015-12-08-2021-10-40-06.jpg"
                alt="background"/>


        </div>
    </>
);

export default MovieHero;
