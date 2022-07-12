import React, { useState, useEffect} from 'react';
import { Element } from "react-scroll";
import HomeLandingComponent from "./HomeLandingComponent";
import HomeInfo from "./HomeInfo";
import HomeStepsInfo from "./HomeStepsInfo";
import HomeGiveThings from "./HomeGiveThings";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeButtonBackToTop from "./HomeButtonBackToTop";
import HomeOrganizations from "./HomeOrganizations";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Utilities/UtilitiesFirebase";

export default function Home(){
    const [user, loading] = useAuthState(auth);

    return (
        <>
            <Element name="BackToTop">
                <HomeButtonBackToTop/>
            </Element>
            <Element name="Homepage">
                <HomeLandingComponent/>
            </Element>
            <Element name="Info">
                <HomeInfo/>
            </Element>
            <Element name="StepsInfo">
                <HomeStepsInfo/>
            </Element>
            <Element name="GiveThings">
                <HomeGiveThings/>
            </Element>
            <Element name="AboutUs">
                <HomeAboutUs/>
            </Element>
            <Element name="Organizations">
                <HomeOrganizations/>
            </Element>
            <Element name="Contact">
                <HomeContact/>
            </Element>
        </>
    )
}
