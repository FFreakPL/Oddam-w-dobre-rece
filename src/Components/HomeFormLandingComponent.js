import React, { useState, useEffect} from 'react';
import HomeHeader from './HomeHeader';
import HomeHeaderLogin from './HomeHeaderLogin';
import HomeHeaderForm from './HomeHeaderForm';

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
                <HomeHeaderLogin props={styles}/>
                <HomeHeader styling={stylesWidth}/>
                <HomeHeaderForm/>
            </div>
        </div>
    )
}