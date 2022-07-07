import React, { useState, useEffect} from 'react';
import LandingComponent from "./LandingComponent";
import Info from "./Info";
import StepsInfo from "./StepsInfo";
import GiveThings from "./GiveThings";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import BackToTop from "./Buttons/BackToTop";

export default function Home(){

    return (
        <>
            <BackToTop/>
            <LandingComponent/>
            <Info/>
            <StepsInfo/>
            <GiveThings/>
            <AboutUs/>
            <Contact/>
        </>
    )
}
