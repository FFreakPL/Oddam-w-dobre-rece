import React, { useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, logout} from "./Firebase";

export default function HeaderLogin({props}){
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    function handleLogin() {
        if(!user) {
            navigate("/login");
        } else {
            alert("Chcesz się zalogować drugi raz?? Czy ty jesteś normalny??!!")
        }
    }
    function handleRegister() {
        if(!user) {
            navigate("/register");
        } else {
            alert("Jesteś już zalogowany więc masz konto jełopie!!")
        }
    }

    function backToHome() {
        navigate("/");
    }
    return (
        <div className="header_login" style={props}>
            {user ? <div className="header_loggedIn" style={{fontSize: "0.75vw", marginRight: "1vw"}}>Cześć {user.email}</div> : <></>}
            <button type="button" className="btn_login" onClick={() => handleLogin()}>Zaloguj</button>
            <button type="button" className="btn_register" onClick={() => handleRegister()}>Załóż konto</button>
            { user ? <button type="button" className="btn_logout" onClick={() => logout() & backToHome()}>Wyloguj się</button>
            : <></>}
        </div>
    )
}