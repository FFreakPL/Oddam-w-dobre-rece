import React, {useContext, useEffect, useState} from "react";
import FormButton from "../Buttons/ButtonForm";
import {DataContext} from "./FormStepsHome";
import FormImportant from "./FormImportant";

export default function FormStep4() {
    const {state, setState} = useContext(DataContext);
    const [city, setCity] = useState(state.city);
    const [street, setStreet] = useState(state.street);
    const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);
    const [postalCode, setPostalCode] = useState(state.postalCode);
    const [date, setDate] = useState(state.date);
    const [hour, setHour] = useState(state.hour)
    const handleChange = ({ target }) => {
        setState(prev => {
            return {
                ...prev,
                [target.name]: target.value
            }
        })
    }
    const handleChangeCity = ({ target }) => {
        setCity(prev => target.value)
    }
    const handleChangeStreet = ({ target }) => {
        setStreet(prev => target.value)
    }
    const handleChangePostalCode = ({ target }) => {
        setPostalCode(prev => target.value)
    }
    const handleChangeDate = ({ target }) => {
        setDate(prev => target.value)
    }
    const handleChangeHour = ({ target }) => {
        setHour(prev => target.value)
    }
    const handleChangePhoneNumber = ({ target }) => {
        setPhoneNumber(prev => target.value)
    }
    const handleNext = () => {
        setState(prev => ({
            ...prev,
            city: city,
            street: street,
            postalCode: postalCode,
            phoneNumber: phoneNumber,
            date: date,
            hour: hour,
            step: prev.step + 1
        }))
    }
    const handleBack = () => {
        setState(prev => ({
            ...prev,
            city: city,
            street: street,
            postalCode: postalCode,
            phoneNumber: phoneNumber,
            date: date,
            hour: hour,
            step: prev.step - 1
        }))
    }

    //////Walidacja Formularzy:
    //Alerty:
    function alertStreet(){
        return alert("Ulica musi zawierać co najmniej 2 znaki!")
    }
    function alertCity(){
        return alert("Miasto musi zawierać co najmniej 2 znaki!")
    }
    function alertPostalCode(){
        return alert("Kod pocztowy mus być w formacie xx-xxx")
    }
    function alertDate(){
        return alert("Podaj datę odbioru!")
    }
    function alertHour(){
        return alert("Podaj godzinę odbioru dla kuriera")
    }
    function alertPhoneNumber(){
        return alert("Podaj numer telefonu komórkowego w formacie xxx-xxx-xxx")
    }
    //Walidacja formy zapisu kodu pocztowego i numeru telefonu:
    const isValidPostalCode = (postalCode) => {
        return /^\d\d-\d\d\d$/.test(postalCode)
    }
    const isValidPhoneNumber = (phoneNumber) => {
        return /^\d\d\d-\d\d\d-\d\d\d$/.test(phoneNumber)
    }

    //Renderowanie warunkowe przycisku "Dalej" i wyświetlanie alertów:
    let button;
    if (street.length < 2) {
        button = <FormButton props={alertStreet} name={"Dalej"}/>
    } else if (city.length < 2) {
        button = <FormButton props={alertCity} name={"Dalej"}/>
    } else if (!isValidPostalCode(postalCode)) {
        button = <FormButton props={alertPostalCode} name={"Dalej"}/>
    } else if (!isValidPhoneNumber(phoneNumber)) {
        button = <FormButton props={alertPhoneNumber} name={"Dalej"}/>
    } else if (!date) {
        button = <FormButton props={alertDate} name={"Dalej"}/>
    } else if (!hour) {
        button = <FormButton props={alertHour} name={"Dalej"}/>
    } else {
        button = <FormButton props={handleNext} name={"Dalej"}/>
    }

console.log(state)
    console.log(city.length)
    return (
        <>
            <FormImportant text={`Podaj adres oraz termin odbioru rzeczy`}/>
            <div className="step">
                <div className="step_counter">Krok 3/4</div>
                <div className="step_container">
                    <div className="step_title">Podaj adres oraz termin odbioru rzecz przez kuriera</div>
                    <div className="step_form_container">

                        <div className="step_form_left">
                            <p className="step_subTitle2">Adres odbioru</p>
                            <div className="step_form_left_inputs">
                                <label htmlFor="street">Ulica</label>
                                <input type="text" name="street" defaultValue={state.street}  className="step_form_left_inputs_street" onChange={handleChangeStreet} required/>
                            </div>
                            <div className="step_form_left_inputs">
                                <label htmlFor="city">Miasto</label>
                                <input type="text" name="city" defaultValue={state.city} className="step_form_left_inputs_city" onChange={handleChangeCity} required/>
                            </div>
                            <div className="step_form_left_inputs">
                                <label htmlFor="postalCode">Kod<br></br>pocztowy</label>
                                <input type="text" name="postalCode" placeholder="xx-xxx" defaultValue={state.postalCode} className="step_form_left_inputs_postalCode" onChange={handleChangePostalCode} required/>
                            </div>
                            <div className="step_form_left_inputs">
                                <label htmlFor="phoneNumber">Numer<br></br>telefonu</label>
                                <input type="text" name="phoneNumber" placeholder="Wpisz 9-cyfrowy numer tel" defaultValue={state.phoneNumber} maxLength="12" className="step_form_left_inputs_phoneNumber" onChange={handleChangePhoneNumber} required/>
                            </div>
                        </div>
                        <div className="step_form_right">
                            <p className="step_subTitle2">Termin odbioru:</p>
                            <div className="step_form_right_inputs">
                                <label htmlFor="date">Data</label>
                                <input type="date" name="date" defaultValue={state.date} className="step_form_right_inputs_date" onChange={handleChangeDate} required/>
                            </div>
                            <div className="step_form_right_inputs">
                                <label htmlFor="hour">Godzina</label>
                                <input type="time"
                                       name="hour"
                                       defaultValue={state.hour}
                                       className="step_form_right_inputs_hour"
                                       onChange={handleChangeHour} required/>
                            </div>
                            <div className="step_form_right_inputs">
                                <label htmlFor="comment">Uwagi<br></br>dla kuriera</label>
                                <textarea rows="3" name="comment" value={state.comment} className="step_form_right_inputs_comment" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="step_buttons_container">
                    <FormButton props={handleBack} name={"Wstecz"}/>
                    {button}
                    {/*{(city.length >= 2)*/}
                    {/*    ? <FormButton props={handleNext} name={"Dalej"}/>*/}
                    {/*    : <FormButton props={showAlert} name={"Dalej"}/>}*/}

                    {/*<FormButton props={handleNext} name={"Dalej"}/>*/}
                </div>
            </div>
        </>
    )
}