import React, { useState, useEffect} from 'react';
import { Element } from "react-scroll";
import LandingComponent from "./LandingComponent";
import Info from "./Info";
import StepsInfo from "./StepsInfo";
import GiveThings from "./GiveThings";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import BackToTop from "./Buttons/BackToTop";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

export default function Home(){
    const [user, loading] = useAuthState(auth);

    return (
        <>
            <Element name="BackToTop">
                <BackToTop/>
            </Element>
            <Element name="Homepage">
                <LandingComponent/>
            </Element>
            <Element name="Info">
                <Info/>
            </Element>
            <Element name="StepsInfo">
                <StepsInfo/>
            </Element>
            <Element name="GiveThings">
                <GiveThings/>
            </Element>
            <Element name="AboutUs">
                <AboutUs/>
            </Element>
            <Element name="Contact">
                <Contact/>
            </Element>
        </>
    )
}
