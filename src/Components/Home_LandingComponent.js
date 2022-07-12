import React, { useState, useEffect} from 'react';
import Home_Header from './Home_Header';
import Home_HeaderLogin from './Home_HeaderLogin';
import Home_HeaderInfo from './Home_HeaderInfo';

export default function Home_LandingComponent({props}){

    const styles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "7vw",
        marginTop: "2vh",
        height: "2vh",
    }

    const stylesWidth = {
        width: "100%"
    }
    return (
        <div name="landingComponent" className="home_landingComponent">
            <div className="home_image"/>
            <div className="home_landingComponent_rightComponent">
                <Home_HeaderLogin props={styles}/>
                <Home_Header styling={stylesWidth}/>
                <Home_HeaderInfo/>
            </div>
        </div>
    )
}