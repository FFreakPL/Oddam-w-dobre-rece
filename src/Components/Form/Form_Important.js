import React, { useState, useEffect} from 'react';
import Button_Give from "../Buttons/Button_Give";
import Button_Organize from "../Buttons/Button_Organize"
import Decoration from "../Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../Utilities/Utilities_Firebase";

export default function Form_Important(){

    return (
        <div className="important">
            <p className="important_title">Ważne</p>
            <p className="important_text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                wiedzieć komu najlepiej je przekazać.</p>
        </div>
    )
}