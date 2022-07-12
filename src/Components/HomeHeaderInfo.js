import React, { useState, useEffect} from 'react';
import ButtonGive from "./Buttons/ButtonGive";
import ButtonOrganize from "./Buttons/ButtonOrganize"
import Decoration from "./Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Utilities/UtilitiesFirebase";

export default function HomeHeaderInfo(){
    const [user, loading] = useAuthState(auth);

    return (
        <div className="header_info">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <div className="home_landingComponent_buttons">
                <Decoration/>
                <div className="home_landingComponent_container">
                    {user ? <ButtonGive/> : <></>}
                    <ButtonOrganize/>
                </div>
            </div>
        </div>
    )
}