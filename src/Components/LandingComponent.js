import React, { useState, useEffect} from 'react';
import Header from './Header';
import HeaderLogin from './HeaderLogin';
import HeaderInfo from './HeaderInfo';
// import homeHero from "../assets/Home-Hero-Image-Small.jpg";

export default function LandingComponent(){

    return (
        <div className="home_landingComponent">
            {/*<img src={homeHero} alt="home hero"/>*/}
            <div className="home_image"/>
            <div className="home_landingComponent_rightComponent">
                <HeaderLogin/>
                <Header/>
                <HeaderInfo/>
            </div>
        </div>
    )
}