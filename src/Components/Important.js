import React, { useState, useEffect} from 'react';
import GiveButton from "./Buttons/GiveButton";
import OrganizeButton from "./Buttons/OrganizeButton"
import Decoration from "./Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

export default function Important(){

    return (
        <div className="important">
            <p className="important_title">Ważne</p>
            <p className="important_text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                wiedzieć komu najlepiej je przekazać.</p>
        </div>
    )
}