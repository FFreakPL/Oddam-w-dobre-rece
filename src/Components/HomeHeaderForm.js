import React, { useState, useEffect} from 'react';
import Decoration from "./Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Utilities/UtilitiesFirebase";

export default function HomeHeaderForm(){
    const [user, loading] = useAuthState(auth);

    return (
        <div className="form_info">
            <p className="form_info_p">Oddaj rzeczy, których już nie chcesz</p>
            <p className="form_info_p"> POTRZEBUJĄCYM</p>
            <div className="form_landingComponent_buttons">
                <Decoration/>
                <p className="form_info_light">Wystarczą 4 proste kroki:</p>
                <div className="form_landingComponent_container">
                    <div className="form_info_step">
                        <p className="form_info_step_number">1</p>
                        <p className="form_info_step_item">Wybierz<br></br>rzeczy</p>
                    </div>
                    <div className="form_info_step">
                        <p className="form_info_step_number">2</p>
                        <p className="form_info_step_item">Spakuj je<br></br>w worki</p>
                    </div>
                    <div className="form_info_step">
                        <p className="form_info_step_number">3</p>
                        <p className="form_info_step_item">Wybierz<br></br>fundację</p>
                    </div>
                    <div className="form_info_step">
                        <p className="form_info_step_number">4</p>
                        <p className="form_info_step_item">Zamów<br></br>kuriera</p>
                    </div>
                </div>
            </div>
        </div>
    )
}