import React, { useState, useEffect, useContext, createContext} from 'react';
import FormLandingComponent from "../HomeFormLandingComponent";
import HomeContact from "../HomeContact";
import HomeButtonBackToTop from "../HomeButtonBackToTop";
import FormImportant from "./FormImportant";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import Step3 from "./FormStep3";
import FormStep35 from "./FormStep35";
import FormStep4 from "./FormStep4";
import FormStep45 from "./FormStep45";
import FormSummary from "./FormSummary";
import FormThankYou from "./FormThankYou";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../Utilities/UtilitiesFirebase";

export const DataContext = React.createContext({})

export default function FormStepsHome(){
    const [user, loading] = useAuthState(auth);
    const [state, setState] = useState({
        step: 1,
    })


    const getComponent = () => {
        switch (state.step) {
            case 1:
                return <FormStep1 />
            case 2:
                return <FormStep2 />
            case 3:
                return <Step3 />
            case 4:
                return <FormStep35 />
            case 5:
                return <FormStep4 />
            case 6:
                return <FormStep45 />
            case 7:
                return <FormSummary />
            case 8:
                return <FormThankYou />
        }
    }
    return (
        <DataContext.Provider value={{ state, setState }}>
            <HomeButtonBackToTop/>
            <FormLandingComponent/>
            {state.step < 7 && <FormImportant/>}
            {getComponent()}
            <HomeContact/>
        </DataContext.Provider>
    )
}
