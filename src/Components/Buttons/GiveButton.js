import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export default function GiveButton() {
    const navigate = useNavigate();

    function handleClick(){
        navigate("./stepsHome")
    }

    return (
        <div className="btn_give" onClick={() => handleClick()}>Oddaj<br/>rzeczy</div>
    )
}