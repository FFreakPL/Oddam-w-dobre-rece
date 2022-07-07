import React, { useState, useEffect} from 'react';
import HeaderLogin from "./HeaderLogin";
import Header from "./Header";
import ResetComponent from "./ResetComponent";

export default function Reset(){

    const styles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "7vw",
        marginTop: "2vh",
        height: "2vh",
    }

    return (
        <>
            <HeaderLogin props={styles}/>
            <div className="login_header">
                <div className="login_empty"/>
                <Header/>
            </div>
            <ResetComponent/>
        </>
    )
}