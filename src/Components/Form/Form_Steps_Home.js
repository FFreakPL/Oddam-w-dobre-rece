import React, { useState, useEffect, useContext, createContext} from 'react';
import FormLandingComponent from "../Home_FormLandingComponent";
import Home_Contact from "../Home_Contact";
import Home_Button_BackToTop from "../Home_Button_BackToTop";
import Form_Important from "./Form_Important";
import Form_Step1 from "./Form_Step1";
import Form_Step2 from "./Form_Step2";
import Step3 from "./Form_Step3";
import Form_Step3_5 from "./Form_Step3_5";
import Form_Step4 from "./Form_Step4";
import Form_Step4_5 from "./Form_Step4_5";
import Form_Summary from "./Form_Summary";
import Form_ThankYou from "./Form_ThankYou";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../Utilities/Utilities_Firebase";

export const DataContext = React.createContext({})

export default function Form_Steps_Home(){
    const [user, loading] = useAuthState(auth);
    const [state, setState] = useState({
        step: 1
    })
    const getComponent = () => {
        switch (state.step) {
            case 1:
                return <Form_Step1 />
            case 2:
                return <Form_Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Form_Step3_5 />
            case 5:
                return <Form_Step4 />
            case 6:
                return <Form_Step4_5 />
            case 7:
                return <Form_Summary />
            case 8:
                return <Form_ThankYou />
        }
    }
    return (
        <DataContext.Provider value={{ state, setState }}>
            <Home_Button_BackToTop/>
            <FormLandingComponent/>
            {state.step < 7 && <Form_Important/>}
            {getComponent()}
            <Home_Contact/>
        </DataContext.Provider>
    )
}
