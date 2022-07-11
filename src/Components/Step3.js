import React, { useState, useEffect} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

export default function Step3(){
    const [user, loading] = useAuthState(auth);
    const [data, setData] = useState([])

    return (
        <>
        </>
    )
}