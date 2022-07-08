import React, { useState, useEffect} from 'react';
import Decoration from "./Decorations/Decoration";
import HeaderLogin from "./HeaderLogin";
import Header from "./Header";
import RegisterComponent from "./RegisterComponent";

export default function Register(){

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
            <HeaderLogin props={styles}/>
            <div className="login_header">
                <div className="login_empty"/>
            <Header styling={stylesWidth}/>
            </div>
            <RegisterComponent/>
        </>
    )
}