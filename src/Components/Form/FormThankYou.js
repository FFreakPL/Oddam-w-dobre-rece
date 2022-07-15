import React, {useContext, useState} from "react";
import Decoration from "../Decorations/Decoration";
import {DataContext} from "./FormStepsHome";

export default function FormThankYou(){
    const {state, setState} = useContext(DataContext);

    return (
        <div className="step">
            <div className="step_thankYou">
                <p>Dziękujemy za przesłanie formularza</p>
                <p>Na maila prześlemy wszelkie</p>
                <p>informacje o odbiorze.</p>
                <Decoration />
            </div>
        </div>
    )
}