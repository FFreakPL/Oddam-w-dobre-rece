import React, { useState, useEffect} from 'react';
import Home_HeaderLogin from "../Home_HeaderLogin";
import Home_Header from "../Home_Header";
import Auth_Login_Component from "./Auth_Login_Component";

export default function Auth_Login(){

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
            <Home_HeaderLogin props={styles}/>
            <div className="login_header">
                <div className="login_empty"/>
            <Home_Header styling={stylesWidth}/>
        </div>
            <Auth_Login_Component/>
        </>
    )
}