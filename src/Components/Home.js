import React, { useState, useEffect} from 'react';
import { Element } from "react-scroll";
import Home_LandingComponent from "./Home_LandingComponent";
import Home_Info from "./Home_Info";
import Home_StepsInfo from "./Home_StepsInfo";
import Home_GiveThings from "./Home_GiveThings";
import Home_AboutUs from "./Home_AboutUs";
import Home_Contact from "./Home_Contact";
import Home_Button_BackToTop from "./Home_Button_BackToTop";
import Home_Organizations from "./Home_Organizations";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Utilities/Utilities_Firebase";

export default function Home(){
    const [user, loading] = useAuthState(auth);

    return (
        <>
            <Element name="BackToTop">
                <Home_Button_BackToTop/>
            </Element>
            <Element name="Homepage">
                <Home_LandingComponent/>
            </Element>
            <Element name="Info">
                <Home_Info/>
            </Element>
            <Element name="StepsInfo">
                <Home_StepsInfo/>
            </Element>
            <Element name="GiveThings">
                <Home_GiveThings/>
            </Element>
            <Element name="AboutUs">
                <Home_AboutUs/>
            </Element>
            <Element name="Organizations">
                <Home_Organizations/>
            </Element>
            <Element name="Contact">
                <Home_Contact/>
            </Element>
        </>
    )
}
