import React, { useContext } from "react";
import MovieContent from "./MovieContent.component";
import { BiShare } from "react-icons/bi";
import { Title } from "../typography/Title.typography";
import { MovieContext } from "../../context/Movie.context";


const MovieHero = () => {
    const { movie } = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(" ,");
    let lang = movie.original_language;
    return (
        <>
            {/*small devices*/}
            <div className="md:hidden relative" style={{ height: "calc(190vw)" }}>
                <img className="h-full w-full"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="background" />
                <div className="absolute bottom-0 left-0 w-full z-10 text-white p-4" style={{
                    height: "auto",
                    backgroundImage: " linear-gradient(180deg, rgba(0,0,0,0.31416316526610644) 0%, rgba(0,0,0,0.5746673669467788) 2%, rgba(0,0,0,0.6923144257703081) 8%, rgba(1,9,10,0.8015581232492998) 11%, rgba(1,12,14,1) 32%)"
                }}>


                    <MovieContent language={lang} duration={`${((movie.runtime) / 60).toFixed(2)}hr •  ${genres}  •  16+  •  ${movie.release_date}`} description={movie.overview} />
                </div>


            </div>

            {/*medium devices*/}
            <div className="hidden md:block lg:hidden relative" style={{ height: "calc(100vw)" }}>
                <img className="h-full w-full"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="background" />
                <div className="absolute bottom-0 left-0 w-full z-10 text-white p-4" style={{
                    height: "auto",
                    backgroundImage: " linear-gradient(180deg, rgba(0,0,0,0.31416316526610644) 0%, rgba(0,0,0,0.5746673669467788) 2%, rgba(0,0,0,0.6923144257703081) 8%, rgba(1,9,10,0.8015581232492998) 11%, rgba(1,12,14,1) 32%)"
                }}>
                    <MovieContent language={lang} duration={`${((movie.runtime) / 60).toFixed(2)}hr •  ${genres}  •  16+  •  ${movie.release_date}`} description={movie.overview} />
                </div>


            </div>

            {/*large devices*/}
            <div className="hidden lg:block  " >

                <div className="overflow-hidden relative" style={{ height: "calc(40vw)" }}>
                    <div className="w-full h-full z-10 absolute " style={{
                        backgroundImage:
                            "linear-gradient(90deg, rgb(34, 34, 34,.99) 24.97%, rgb(34, 34, 34,.99) 45.3%, rgba(34, 34, 34, .6) 97.47%, rgb(34, 34, 34) 100%)",
                    }} />
                    <div className="flex w-11/12 absolute inset-y-10 left-20 z-30 items-center gap-10 text-white">
                        <div className="w-72 rounded-xl overflow-hidden">
                            <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                        </div>
                        <div>
                            <MovieContent language={lang} duration={`${((movie.runtime) / 60).toFixed(2)}hr •  ${genres}  •  16+  •  ${movie.release_date}`} description={movie.overview}
                                title={movie.original_title} />
                        </div>
                        <p className=" flex items-center gap-3 text-xl absolute right-6 top-3 bg-prem-200 px-5 py-3 font-light cursor-pointer rounded">

                            <BiShare className="font-medium text-2xl" />
                            Share
                        </p>
                    </div>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt="background" />
                </div>

                <div className="z-72 w-2/3 ml-20 my-5">

                    <Title title="About the movie" />
                    <p className="my-4">{movie.overview}</p>
                    <div className="my-4">
                        <hr />
                    </div>
                </div>



            </div>
        </>
    )
};

export default MovieHero;
