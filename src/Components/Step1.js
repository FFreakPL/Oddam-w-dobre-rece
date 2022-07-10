import React, { useState, useEffect, createContext} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

export default function Step1(){
    const [user, loading] = useAuthState(auth);
    const [context, setContext] = useState();

    const MyContext = React.createContext(context);

    return (
        <>

        </>
    )
}