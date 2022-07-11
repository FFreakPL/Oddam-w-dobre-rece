import React, { useState, useEffect, useContext, createContext} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import { DataContext} from "./StepsHome";
import {auth} from "./Firebase";

export default function Step1(){
    const [user, loading] = useAuthState(auth);
    const [data, setData] = useState([])
    // const [data, setData] = useContext([DataContext])
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

    const checkList2 = [
        "coś tam",
        "coś coś",
        "picie",
        "jedzenie",
        "różne"];

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

    console.log(data);
    return (
        <div className="step">
            <div className="step_counter">Krok 1/4</div>
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
            <button type="button" className="step_button">Dalej</button>
        </div>
    )
}