import React, {useContext, useState} from "react";
import FormButton from "../Buttons/ButtonForm";
import {DataContext} from "./FormStepsHome";

export default function FormStep35() {
    const { state, setState } = useContext(DataContext);
    const handleNext = () => {
        setState(prev => ({
            ...prev,
            step: prev.step + 1
        }))
    }
    const handleBack = () => {
        setState(prev => ({
            ...prev,
            step: prev.step - 1
        }))
    }
    console.log(state);
    return (
        <div className="step">
            <h1 style={{fontSize: "4rem", marginBottom: "2rem", marginTop: "4rem"}}>Test state'ów:</h1>
            <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Rzeczy do oddania: </span>
                <span style={{fontWeight: "700"}}>{state.selectedThing}</span></p>
            <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Ilość toreb: </span>
                <span style={{fontWeight: "700"}}>{state.selectedBag}</span></p>
            <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Wybrana lokalizacja: </span>
                <span style={{fontWeight: "700"}}>{state.selectedLocation}</span></p>
            <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Komu chcesz pomóc: </span>
                <span style={{fontWeight: "700"}}>{state.selectedHelp.join(",")}</span></p>
            <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Konkretna organizacja: </span>
                <span style={{fontWeight: "700"}}>{state.specificLocation}</span></p>

            <div className="step_buttons_container">
                <FormButton props={handleBack} style={{marginTop: "248px"}} name={"Wstecz"}/>
                <FormButton props={handleNext} style={{marginTop: "248px"}} name={"Dalej"}/>
            </div>
        </div>
    )
}