import React, {useContext, useState} from "react";
import FormButton from "../Buttons/ButtonForm";
import {DataContext} from "./FormStepsHome";

export default function FormSummary() {
    const {state, setState} = useContext(DataContext);

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
    return (
        <div className="step">
            <div className="step_counter">Krok 3/4</div>
            <div className="step_container">
                <div className="step_title">Podaj adres oraz termin odbioru rzecz przez kuriera</div>
                <div className="step_form_container">
                    <div className="step_form_left">
                        <p className="step_subTitle2">Adres odbioru</p>
                        <div className="step_form_left_inputs">
                            <label htmlFor="street">Ulica</label>
                            <textarea rows="1" name="street" className="step_form_left_inputs_street" required/>
                        </div>
                        <div className="step_form_left_inputs">
                            <label htmlFor="city">Miasto</label>
                            <textarea rows="1" name="city" className="step_form_left_inputs_city" required/>
                        </div>
                        <div className="step_form_left_inputs">
                            <label htmlFor="postalCode">Kod<br></br>pocztowy</label>
                            <textarea rows="1" name="postalCode" className="step_form_left_inputs_postalCode" required/>
                        </div>
                        <div className="step_form_left_inputs">
                            <label htmlFor="phoneNumber">Numer<br></br>telefonu</label>
                            <textarea rows="1" name="phoneNumber" maxLength="9" className="step_form_left_inputs_phoneNumber" required/>
                        </div>
                    </div>
                    <div className="step_form_right">
                        <p className="step_subTitle2">Termin odbioru:</p>
                        <div className="step_form_right_inputs">
                            <label htmlFor="date">Data</label>
                            <textarea rows="1" name="date" className="step_form_right_inputs_date" required/>
                        </div>
                        <div className="step_form_right_inputs">
                            <label htmlFor="hour">Godzina</label>
                            <textarea rows="1" name="hour" className="step_form_right_inputs_hour" required/>
                        </div>
                        <div className="step_form_right_inputs">
                            <label htmlFor="comment">Uwagi<br></br>dla kuriera</label>
                            <textarea rows="3" name="comment" className="step_form_right_inputs_comment"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="step_buttons_container">
                <FormButton props={handleBack} name={"Wstecz"}/>
                <FormButton props={handleNext} name={"Dalej"}/>
            </div>
        </div>
    )
}