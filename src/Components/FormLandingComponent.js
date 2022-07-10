import React, { useState, useEffect} from 'react';
import Header from './Header';
import HeaderLogin from './HeaderLogin';
import HeaderForm from './HeaderForm';

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
        <div name="form_landingComponent" className="form_landingComponent">
            <div className="form_image"/>
            <div className="form_rightComponent">
                <HeaderLogin props={styles}/>
                <Header styling={stylesWidth}/>
                <HeaderForm/>
            </div>
        </div>
    )
}