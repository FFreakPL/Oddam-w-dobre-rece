import React, { useState, useEffect, createContext} from 'react';
import { Element } from "react-scroll";
import FormLandingComponent from "./FormLandingComponent";
import Contact from "./Contact";
import Step1 from "./Step1"
import BackToTop from "./Buttons/BackToTop";
import Important from "./Important"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

export default function StepsHome(){
    const [user, loading] = useAuthState(auth);
    const [context, setContext] = useState();

    const MyContext = React.createContext(context);

    return (
        <MyContext.Provider  value={context}>
            <Element name="BackToTop">
                <BackToTop/>
            </Element>
            <Element name="Homepage">
                <FormLandingComponent/>
            </Element>
            <Element name="Important">
                <Important/>
            </Element>
            <Element name="Step1">
                <Step1/>
            </Element>
            <Element name="Contact">
                <Contact/>
            </Element>
        </MyContext.Provider >
    )
}
