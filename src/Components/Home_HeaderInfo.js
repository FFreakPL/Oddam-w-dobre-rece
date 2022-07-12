import React, { useState, useEffect} from 'react';
import Button_Give from "./Buttons/Button_Give";
import Button_Organize from "./Buttons/Button_Organize"
import Decoration from "./Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Utilities/Utilities_Firebase";

export default function Home_HeaderInfo(){
    const [user, loading] = useAuthState(auth);

    return (
        <div className="header_info">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <div className="home_landingComponent_buttons">
                <Decoration/>
                <div className="home_landingComponent_container">
                    {user ? <Button_Give/> : <></>}
                    <Button_Organize/>
                </div>
            </div>
        </div>
    )
}