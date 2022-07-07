import React, { useState, useEffect} from 'react';
import Header from './Header';
import HeaderLogin from './HeaderLogin';
import HeaderInfo from './HeaderInfo';
// import homeHero from "../assets/Home-Hero-Image-Small.jpg";

export default function LandingComponent(){

    const styles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "7vw",
        height: "2vh",
    }

    return (
        <div className="home_landingComponent">
            <div className="home_image"/>
            <div className="home_landingComponent_rightComponent">
                <HeaderLogin props={styles}/>
                <Header/>
                <HeaderInfo/>
            </div>
        </div>
    )
}