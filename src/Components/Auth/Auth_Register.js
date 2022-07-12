import React, { useState, useEffect} from 'react';
import Decoration from "../Decorations/Decoration";
import Home_HeaderLogin from "../Home_HeaderLogin";
import Home_Header from "../Home_Header";
import Auth_Register_Component from "./Auth_Register_Component";

export default function Auth_Register(){

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
            <Auth_Register_Component/>
        </>
    )
}