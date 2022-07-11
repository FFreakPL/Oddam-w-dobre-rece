import React, { useState, useEffect, useContext, createContext} from 'react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import FormLandingComponent from "./FormLandingComponent";
import Contact from "./Contact";
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import BackToTop from "./Buttons/BackToTop";
import Important from "./Important"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

// export const DataContext = React.createContext([])

export default function StepsHome(){
    const [user, loading] = useAuthState(auth);
    // const [data, setData] = useContext(DataContext);
    const [data, setData] = useState([]);
    const [visibleStep1, setVisibleStep1] = useState(true)
    const [visibleStep2, setVisibleStep2] = useState(false)
    const [visibleStep3, setVisibleStep3] = useState(false)
    const [visibleStep4, setVisibleStep4] = useState(false)
    const [checkedItems1, setCheckedItems1] = useState([])
    // const navigate = useNavigate();

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
        "coś tam",
        "coś coś",
        "picie",
        "jedzenie",
        "różne"];
    const checkList3 = [
        "step3",
        "step3",
        "step3",
        "step3",
        "step3"];
    const checkList4 = [
        "step4",
        "step4",
        "step4",
        "step4",
        "step4"];

    const handleCheck = (e) => {
        let updatedContext = [...data];
        if (e.target.checked) {
            updatedContext = [...data, e.target.value];
        } else {
            updatedContext.splice(data.indexOf(e.target.value), 1);
        }
        setData(updatedContext);
    };

    function Step1() {
        return (
            <div className={visibleStep1 ? "step" : "hidden"}>
                <div className="step_counter">Krok 1/4</div>
                <div className="step_container">
                    <div className="step_title">Zaznacz co chcesz dodać:</div>
                    {checkList.map((item, index) => (
                        <div className="step_item" key={index}>
                            <input
                                value={item}
                                type="checkbox"
                                onChange={handleCheck}/>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
                <button type="button"
                        className="step_button"
                        onClick={() => showStep2()}>Dalej</button>
            </div>
        )
    }
    function Step2() {
        return(
            <div className={visibleStep2 ? "step" : "hidden"}>
                <div className="step_counter">Krok 2/4</div>
                <div className="step_container">
                    <div className="step_title">Zaznacz co chcesz dodać:</div>
                    {checkList2.map((item, index) => (
                        <div className="step_item" key={index}>
                            <input
                                value={item}
                                type="checkbox"
                                onChange={handleCheck}/>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
                <button type="button"
                        className="step_button"
                        onClick={() => showStep1()}>Wstecz</button>
                <button type="button"
                        className="step_button"
                        onClick={() => showStep3()}>Dalej</button>
            </div>
        )
    }
    function Step3() {
        return (
            <div className={visibleStep3 ? "step" : "hidden"}>
                <div className="step_counter">Krok 3/4</div>
                <div className="step_container">
                    <div className="step_title">Zaznacz co chcesz dodać:</div>
                    {checkList3.map((item, index) => (
                        <div className="step_item" key={index}>
                            <input
                                value={item}
                                type="checkbox"
                                onChange={handleCheck}/>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
                <button type="button"
                        className="step_button"
                        onClick={() => showStep2()}>Wstecz</button>
                <button type="button"
                        className="step_button"
                        onClick={() => showStep4()}>Dalej</button>
            </div>
        )
    }
    function Step4() {
        return (
        <div className={visibleStep4 ? "step" : "hidden"}>
            <div className="step_counter">Krok 4/4</div>
            <div className="step_container">
                <div className="step_title">Zaznacz co chcesz dodać:</div>
                {checkList4.map((item, index) => (
                    <div className="step_item" key={index}>
                        <input
                            value={item}
                            type="checkbox"
                            onChange={handleCheck}/>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
            <button type="button"
                    className="step_button"
                    onClick={() => showStep3()}>Wstecz</button>
            <button type="button"
                    className="step_button">Dalej</button>
        </div>
        )
    }
    // function addToContext(e) {
    //     // e.preventDefault();
    //     setData({input: e.target.value});
    // }
    // function nextStep() {
    //     navigate("/step2")
    // }
    console.log(data);
    return (
        <>
            <BackToTop/>
            <FormLandingComponent/>
            <Important/>
            {/*<Step1/>*/}
            {user && Step1()}
            {/*<Step2/>*/}
            {user && Step2()}
            {/*<Step3/>*/}
            {user && Step3()}
            {/*<Step4/>*/}
            {user && Step4()}
            <Contact/>
        </>
    )
}
