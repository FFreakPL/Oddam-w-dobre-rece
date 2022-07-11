import React, { useState, useEffect, useContext, createContext} from 'react';
import FormLandingComponent from "./FormLandingComponent";
import Contact from "./Contact";
import BackToTop from "./Buttons/BackToTop";
import Important from "./Important"
import Step1 from "./Give_Away/Step1"
import Step2 from "./Give_Away/Step2"
import Step3 from "./Give_Away/Step3"
import Step4 from "./Give_Away/Step4"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

export const DataContext = React.createContext({})

export default function StepsHome(){
    const [user, loading] = useAuthState(auth);

    const [state, setState] = useState({
        step: 1
    })

    const getComponent = () => {
        switch (state.step) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Step4 />
        }
    }

    return (
        <DataContext.Provider value={{ state, setState }}>
            <BackToTop/>
            <FormLandingComponent/>
            <Important/>
            {getComponent()}
            <Contact/>
        </DataContext.Provider>
    )
}
