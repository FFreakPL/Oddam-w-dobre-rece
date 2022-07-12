import React, { useState, useEffect} from 'react';
import HomeHeader from './HomeHeader';
import HomeHeaderLogin from './HomeHeaderLogin';
import HomeHeaderInfo from './HomeHeaderInfo';

export default function HomeLandingComponent({props}){

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
                <HomeHeaderLogin props={styles}/>
                <HomeHeader styling={stylesWidth}/>
                <HomeHeaderInfo/>
            </div>
        </div>
    )
}