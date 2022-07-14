import React, { useState, useEffect} from 'react';
import ButtonGive from "../Buttons/ButtonGive";
import ButtonOrganize from "../Buttons/ButtonOrganize"
import Decoration from "../Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../Utilities/UtilitiesFirebase";

export default function FormImportant({text}){

    return (
        <div className="important">
            <p className="important_title">Ważne</p>
            <p className="important_text">{text}</p>
        </div>
    )
}