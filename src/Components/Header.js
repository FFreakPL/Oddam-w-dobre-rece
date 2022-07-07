import React, { useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "6vh",
        width: "50vw",
    }

    return (
        <div className="header">
            <ul className="header_list">
                <li className="header_item" onClick={() => handleClick()}>Start</li>
                <li className="header_item">O co chodzi?</li>
                <li className="header_item">O nas</li>
                <li className="header_item">Fundacja i organizacje</li>
                <li className="header_item">Kontakt</li>
            </ul>
        </div>
    )
}