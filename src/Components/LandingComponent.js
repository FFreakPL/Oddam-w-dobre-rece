import React, { useState, useEffect} from 'react';
import Header from './Header';
import HeaderLogin from './HeaderLogin';
import HeaderInfo from './HeaderInfo';

export default function LandingComponent({props}){

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
                <HeaderLogin props={styles}/>
                <Header styling={stylesWidth}/>
                <HeaderInfo/>
            </div>
        </div>
    )
}