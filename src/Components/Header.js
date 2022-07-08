import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export default function Header({styling}) {
const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <div className="header" style={styling}>
            <ul className="header_list">
                <li className="header_item" onClick={() => handleClick()}>Start</li>
                <li className="header_item">
                    <Link
                        to="Info"
                        spy={true}
                        smooth={true}
                        duration={500}>O co chodzi?</Link>
                </li>
                <li className="header_item">
                    <Link
                        to="AboutUs"
                        spy={true}
                        smooth={true}
                        duration={500}>O nas</Link>
                </li>
                <li className="header_item">
                    <Link
                        to="Organizations"
                        spy={true}
                        smooth={true}
                        duration={500}>Fundacja i organizacje</Link>
                </li>
                <li className="header_item">
                    <Link
                        to="Contact"
                        spy={true}
                        smooth={true}
                        duration={500}>Kontakt</Link>
                </li>
            </ul>
        </div>
    )
}