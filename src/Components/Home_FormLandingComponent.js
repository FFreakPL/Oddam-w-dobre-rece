import React, { useState, useEffect} from 'react';
import Home_Header from './Home_Header';
import Home_HeaderLogin from './Home_HeaderLogin';
import Home_HeaderForm from './Home_HeaderForm';

export default function LandingComponent(){

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
        <div name="form_landingComponent" className="form_landingComponent">
            <div className="form_image"/>
            <div className="form_rightComponent">
                <Home_HeaderLogin props={styles}/>
                <Home_Header styling={stylesWidth}/>
                <Home_HeaderForm/>
            </div>
        </div>
    )
}