import React from 'react';
import NavBar from "../components/Navbar/Navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const PlaysLayout = (props) => (
<>
    <header>
        <NavBar/>
        <HeroCarousel/>
    </header>

    {props.children}
</>
);
export default PlaysLayout;