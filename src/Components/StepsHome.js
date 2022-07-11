import React, { useState, useEffect, useContext, createContext} from 'react';
import FormLandingComponent from "./FormLandingComponent";
import Contact from "./Contact";
import BackToTop from "./Buttons/BackToTop";
import Important from "./Important"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Firebase";
import FormButton from "./Buttons/FormButtons";

// export const DataContext = React.createContext([])

export default function StepsHome(){
    const [user, loading] = useAuthState(auth);
    const [visibleStep1, setVisibleStep1] = useState(true)
    const [visibleStep2, setVisibleStep2] = useState(false)
    const [visibleStep3, setVisibleStep3] = useState(false)
    const [visibleStep4, setVisibleStep4] = useState(false)
    //STEP 1 state
    const [thingsToGive, setThingsToGive] = useState("");
    //STEP 2 state
    const [amountOfBags, setAmountOfBags] = useState();
    //STEP 3 states
    const [localisation, setLocalisation] = useState("")
    const [help, setHelp] = useState([])
    const [localisationSpecific, setLocalisationSpecific] = useState("")

    function handleStep1(e) {
        if (e.target.value === thingsToGive) {
            setThingsToGive("");
        } else {
            setThingsToGive([e.target.value]);
        }
    }
    function handleStep2(e) {
        if (e.target.value === amountOfBags) {
            setAmountOfBags();
        } else {
            setAmountOfBags(e.target.value);
        }
    }
    function handleStep3Localisation(e) {
        if (e.target.value === localisation) {
            setLocalisation("");
        } else {
            setLocalisation(e.target.value);
        }
    }
    // function handleStep3Help(e) {
    //     if (e.target.value === help) {
    //         setHelp("");
    //     } else {
    //         setHelp(e.target.value);
    //     }
    // }
    function handleStep3Specific(e) {
        if (e.target.value === localisationSpecific) {
            setLocalisationSpecific("");
        } else {
            setLocalisationSpecific(e.target.value);
        }
    }
    console.log(`Rzeczy do oddania: ${thingsToGive}`)
    console.log(`Ilość toreb: ${amountOfBags}`)
    console.log(`Lokalizacja: ${localisation}`)
    console.log(`Komu chcę pomóc:${help}`)
    console.log(`Konkretna organizacja: ${localisationSpecific}`)

    function showStep1() {
        setVisibleStep1(true);
        setVisibleStep2(false);
        setVisibleStep3(false);
        setVisibleStep4(false);
    }
    function showStep2() {
        setVisibleStep1(false);
        setVisibleStep2(true);
        setVisibleStep3(false);
        setVisibleStep4(false);
    }
    function showStep3() {
        setVisibleStep1(false);
        setVisibleStep2(false);
        setVisibleStep3(true);
        setVisibleStep4(false);
    }
    function showStep4() {
        setVisibleStep1(false);
        setVisibleStep2(false);
        setVisibleStep3(false);
        setVisibleStep4(true);
    }

    const checkList = [
        "ubrania, które nadają się do ponownego użycia",
        "ubrania, do wyrzucenia",
        "zabawki",
        "książki",
        "inne"];
    const checkList2 = [
        1,
        2,
        3,
        4,
        5];
    const checkList3Localisation = [
        "Poznań",
        "Warszawa",
        "Kraków",
        "Wrocław",
        "Katowice"];
    const checkList3Help = [
        "dzieciom",
        "samotnym matkom",
        "bezdomnym",
        "niepełnosprawnym",
        "osobom starszym"];
    const checkList4 = [
        "step4",
        "step4",
        "step4",
        "step4",
        "step4"];

    const handleStep3Help = (e) => {
        let updatedData = [...help];
        if (e.target.checked) {
            updatedData = [...help, e.target.value];
        } else {
            updatedData.splice(help.indexOf(e.target.value), 1);
        }
        setHelp(updatedData);
    };
    function showAlert(){
        alert("Proszę wybrać jedną z opcji")
    }

    function Step1() {
        return (
         <div className={visibleStep1 ? "step" : "hidden"}>
            <div className="step_counter">Krok 1/4</div>
            <div className="step_container">
                <div className="step_title">Zaznacz co chcesz dodać:</div>
                    <div className="step_items" onChange={handleStep1}>
                        {checkList.map((item, index) => (
                                <div className="step_item" key={index}>
                                    <input
                                        value={item}
                                        type="radio"
                                        name="step1"
                                        onChange={handleStep1}/>
                                    <span>{item}</span>
                                </div>
                        ))}
                </div>
            </div>
             {thingsToGive.length !== 0 ? <FormButton props={() => showStep2()} name={"Dalej"}/>
                 : <FormButton props={showAlert} name={"Dalej"}/>}
        </div>
        )
    }
    function Step2() {
        return(
            <div className={visibleStep2 ? "step" : "hidden"}>
                <div className="step_counter">Krok 2/4</div>
                <div className="step_container">
                    <div className="step_title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</div>
                    <div className="step_select_container">
                    <p>Liczba worków to:</p>
                    <select className="step_select" defaultValue={'—— wybierz ——'} onChange={handleStep2}>
                        <option className="step_item_firstOne" value={'—— wybierz ——'} disabled>—— wybierz ——</option>
                    {checkList2.map((item, index) => (
                        <option
                            className="step_item"
                            value={item}
                            key={index}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
                </div>
                <div className="step_buttons_container">
                    <FormButton props={() => showStep1()} name={"Wstecz"}/>
                    {amountOfBags ? <FormButton props={() => showStep3()} name={"Dalej"}/>
                        : <FormButton props={showAlert} name={"Dalej"}/>}
                </div>
            </div>
        )
    }
    function Step3() {
        return (
            <div className={visibleStep3 ? "step" : "hidden"}>
                <div className="step_counter">Krok 3/4</div>
                <div className="step_container">
                    <div className="step_title">Lokalizacja:</div>
                        <select className="step_select" defaultValue={'—— wybierz ——'} onChange={handleStep3Localisation}>
                            <option className="step_item_firstOne" value={'—— wybierz ——'} disabled>—— wybierz ——</option>
                            {checkList3Localisation.map((item, index) => (
                                <option
                                    className="step_item"
                                    value={item}
                                    key={index}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    <p className="step_subTitle1">Komu chcesz pomóc?</p>
                    <ul className="step_items">
                    {checkList3Help.map((item, index) => (
                        <li className="step_item_checkbox" key={index}>
                            <input
                                value={item}
                                className="step_item_checkbox_element"
                                id={index}
                                type="checkbox"
                                name="step3_checkbox"
                                onChange={handleStep3Help}/>
                            <label htmlFor={index}>{item}</label>
                        </li>
                    ))}
                    </ul>
                    <div className="step_localisationSpecific">Wpisz nazwę konkretnej ogranizacji (opcjonalnie)</div>
                    <input type="text" className="step_localisationSpecific_input" onChange={handleStep3Specific}/>
                <div className="step_buttons_container">
                    <FormButton props={() => showStep2()} name={"Wstecz"}/>
                    <FormButton props={() => showStep4()} name={"Dalej"}/>
                </div>
            </div>
            </div>
        )
    }
    function Step4() {
        return (
            <div className={visibleStep4 ? "step" : "hidden"}>
                <h1 style={{fontSize: "4rem", marginBottom: "2rem", marginTop: "4rem"}}>Test state'ów:</h1>
                <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Rzeczy do oddania: </span>
                    <span style={{fontWeight: "700"}}>{thingsToGive}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Ilość toreb: </span>
                    <span style={{fontWeight: "700"}}>{amountOfBags}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Wybrana lokalizacja: </span>
                    <span style={{fontWeight: "700"}}>{localisation}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Komu chcesz pomóc: </span>
                    <span style={{fontWeight: "700"}}>{help.join(",")}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "2rem"}}><span>Konkretna organizacja: </span>
                    <span style={{fontWeight: "700"}}>{localisationSpecific}</span></p>

                {/*<div className="step_counter">Krok 4/4</div>*/}
                {/*<div className="step_container">*/}
                {/*    <div className="step_title">Zaznacz co chcesz dodać:</div>*/}
                {/*    {checkList4.map((item, index) => (*/}
                {/*        <div className="step_item" key={index}>*/}
                {/*            <input*/}
                {/*                value={item}*/}
                {/*                type="checkbox"*/}
                {/*                onChange={handleStep1}/>*/}
                {/*            <span>{item}</span>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="step_buttons_container">
                    <FormButton props={() => showStep3()} name={"Wstecz"}/>
                    {/*<FormButton props={() => showStep5()} name={"Dalej"}/>*/}
                </div>
            </div>
        )
    }
    return (
        <>
            <BackToTop/>
            <FormLandingComponent/>
            <Important/>
            {user && Step1()}
            {user && Step2()}
            {user && Step3()}
            {user && Step4()}
            <Contact/>
        </>
    )
}
