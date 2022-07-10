import React, { useState, useEffect} from 'react';
import HeaderLogin from "./HeaderLogin";
import Header from "./Header";
import Contact from "./Contact";

export default function LoggedIn(){

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
        <>
            <div name="landingComponent" className="home_landingComponent">
                <div className="home_image"/>
                <div className="home_landingComponent_rightComponent">
                    <HeaderLogin props={styles}/>
                    <Header styling={stylesWidth}/>
                </div>
            </div>
            <Contact/>
        </>
    )
}