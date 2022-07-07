import React, { useState, useEffect} from 'react';
import GiveButton from "./Buttons/GiveButton";
import OrganizeButton from "./Buttons/OrganizeButton"
import Decoration from "./Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

export default function HeaderInfo(){
    const [user, loading] = useAuthState(auth);

    return (
        <div className="header_info">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <div className="home_landingComponent_buttons">
                <Decoration/>
                <div className="home_landingComponent_container">
                    {user ? <GiveButton/> : <></>}
                    <OrganizeButton/>
                </div>
            </div>
        </div>
    )
}