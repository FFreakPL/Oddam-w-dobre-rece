import React, { useState, useEffect} from 'react';
import Decoration from "../Decorations/Decoration";
import HomeHeaderLogin from "../HomeHeaderLogin";
import HomeHeader from "../HomeHeader";
import AuthRegisterComponent from "./AuthRegisterComponent";

export default function AuthRegister(){

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
            <AuthRegisterComponent/>
        </>
    )
}