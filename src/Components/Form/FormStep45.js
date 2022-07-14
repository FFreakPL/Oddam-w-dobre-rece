import React, {useContext, useState} from "react";
import FormButton from "../Buttons/ButtonForm";
import {DataContext} from "./FormStepsHome";

export default function FormStep45() {
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
        <div className="step"><div style={{display: 'flex', height: "100%"}}>
            <div style={{display: 'flex', flexDirection: `column`, height: "90px"}}>
                <h1 style={{fontSize: "3rem", marginBottom: "1rem", marginTop: "1rem"}}>Test state'ów:</h1>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Rzeczy do oddania: </span>
                    <span style={{fontWeight: "700"}}>{state.things}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Ilość toreb: </span>
                    <span style={{fontWeight: "700"}}>{state.bags}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Wybrana lokalizacja: </span>
                    <span style={{fontWeight: "700"}}>{state.location}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Komu chcesz pomóc: </span>
                    <span style={{fontWeight: "700"}}>{state.help.join(",")}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Konkretna organizacja: </span>
                    <span style={{fontWeight: "700"}}>{state.specificLocation}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Dane z formularza:</span></p>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Ulica: {state.street}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Miasto: {state.city}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Kod pocztowy: {state.postalCode}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Numer telefonu: {state.phoneNumber}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Data: {state.date}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Godzina: {state.hour}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Uwagi dla kuriera: {state.comment}</span>
            </div>
            <div className="step_buttons_container" style={{display: "flex", justifyContent: "flex-start",
                alignItems: "flex-end", flexDirection: "row", width: "100%", height: "100%"}}>
                <FormButton props={handleBack} style={{height: "90px"}} name={"Wstecz"}/>
                {/*<FormButton props={handleNext} style={{height: "90px"}} name={"Dalej"}/>*/}
            </div>
        </div>
        </div>
    )
}