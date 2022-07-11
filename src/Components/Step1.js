import React, { useState, useEffect, useContext, createContext} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { DataContext} from "./StepsHome";
import {auth} from "./Firebase";

export default function Step1(){
    const [user, loading] = useAuthState(auth);
    const [data, setData] = useState([])
    const navigate = useNavigate();
    // const [data, setData] = useContext(DataContext)
    // const [checked, setChecked] = useState([]);

    // const [username, setUsername] =  useState({village: 'Konoha'});
    //
    // const usernameSet = () => {
    //     setUsername((prevState) => {
    //         const data = {
    //             ...prevState,
    //             firstname: 'Naruto',
    //             familyname: 'Uzmaki'
    //         }
    //         return data
    //     });
    // }

    const checkList = [
        "ubrania, które nadają się do ponownego użycia",
        "ubrania, do wyrzucenia",
        "zabawki",
        "książki",
        "inne"];

    const handleCheck = (e) => {
        let updatedContext = [...data];
        if (e.target.checked) {
            updatedContext = [...data, e.target.value];
        } else {
            updatedContext.splice(data.indexOf(e.target.value), 1);
        }
        setData(updatedContext);
    };

    function addToContext(e) {
        // e.preventDefault();
        setData({input: e.target.value});
    }
    function nextStep() {
        navigate("/step2")
    }
    console.log(data);
    return (
        <div className="step">
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
                    onClick={() => nextStep()}>Dalej</button>
        </div>
    )
}