import React, { useState, useEffect, useContext, createContext} from 'react';
import FormLandingComponent from "../HomeFormLandingComponent";
import HomeContact from "../HomeContact";
import HomeButtonBackToTop from "../HomeButtonBackToTop";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormSummary from "./FormSummary";
import FormThankYou from "./FormThankYou";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../Utilities/UtilitiesFirebase";

export const DataContext = React.createContext({})

export default function FormStepsHome(){
    const [user, loading] = useAuthState(auth);
    const data =  {
        step: 1,
        things: [],
        bags: '—— wybierz ——',
        location: '—— wybierz ——',
        help: [],
        specificLocation: "",
        street: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        date: "",
        hour: "",
        comment: ""
    }
    const [state, setState] = useState(data)

    const getComponent = () => {
        switch (state.step) {
            case 1:
                return <FormStep1 />
            case 2:
                return <FormStep2 />
            case 3:
                return <FormStep3 />
            case 4:
                return <FormStep4 />
            case 5:
                return <FormSummary />
            case 6:
                return <FormThankYou />
        }
    }
    return (
        <DataContext.Provider value={{ state, setState }}>
            <HomeButtonBackToTop/>
            <FormLandingComponent/>
            {getComponent()}
            <HomeContact/>
        </DataContext.Provider>
    )
}
