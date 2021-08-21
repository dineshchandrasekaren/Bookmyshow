import React from "react";
import { BiChevronLeft,BiShare, BiSearch, BiMenu } from "react-icons/bi";
import { VscTriangleDown } from "react-icons/vsc";

const Navsm = () => (
    <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-2 text-2xl font-bold">
            <BiChevronLeft className="cursor-pointer"/>
            <h3 className="text-xl">It All Started Here!</h3>
        </div>
        <div className="text-2xl cursor-pointer">
            <BiShare />
        </div>
    </div>
);

const Navlg = () => (
    <>
        <div className="container mx-auto px-3 flex items-center justify-between w-full">
            <div className="w-full px-4 flex items-center  gap-3">
                <div className="w-12">
                    <img
                        src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="flex items-center gap-3 bg-white w-3/5 px-3 py-1 rounded text-bms-500">
                    <div>
                        <BiSearch />
                    </div>
                    <input
                        type="search"
                        placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        className="w-full border-none focus:outline-none py-1"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
                <p className="flex items-center text-sm  text-gray-300 ">
                    Chennai <VscTriangleDown className="text-white m-1" />
                </p>
                <button className="text-xs text-gray-200 whitespace-nowrap bg-navbtn-400 py-1 px-4 rounded">
                    Sign in
                </button>
                <BiMenu className="text-3xl text-white" />
            </div>
        </div>
    </>
);
const MovieNavBar = () => (
    <>
        <nav className="absolute inset-x-0 z-30 bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-3">
            <div className=" md:hidden">
                <Navsm />
            </div>
            <div className="hidden lg:flex">
                <Navlg />
            </div>
            <div className="hidden md:block lg:hidden">
                <Navsm />
            </div>
        </nav>
    </>
);
export default MovieNavBar;
