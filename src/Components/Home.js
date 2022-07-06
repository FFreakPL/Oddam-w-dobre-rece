import React, { useState, useEffect} from 'react';
import LandingComponent from "./LandingComponent";
import Info from "./Info";
import StepsInfo from "./StepsInfo";
import GiveThings from "./GiveThings";

export default function Home(){

    return (
        <div className="home">
            <LandingComponent/>
            <Info/>
            <StepsInfo/>
            <GiveThings/>
        </div>
    )
}
