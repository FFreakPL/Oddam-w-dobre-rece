import React, { useState, useEffect} from 'react';
import HomeHeaderLogin from "../HomeHeaderLogin";
import HomeHeader from "../HomeHeader";
import ResetComponent from "./AuthResetComponent";

export default function AuthReset(){

    const styles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "7vw",
        marginTop: "2vh",
        height: "2vh",
    }
    const stylesWidth = {
        width: "50%"
    }
    return (
        <>
            <HomeHeaderLogin props={styles}/>
            <div className="login_header">
                <div className="login_empty"/>
                <HomeHeader styling={stylesWidth}/>
            </div>
            <ResetComponent/>
        </>
    )
}