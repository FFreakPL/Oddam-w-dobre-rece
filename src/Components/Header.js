import React, { useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const aboutUs = document.querySelector('.aboutUs');
    const info = document.querySelector('.info');
    const organizations = document.querySelector('.organizations');
    const contact = document.querySelector('.contact');

    function handleClick() {
        navigate("/");
    }
    const scrollToAboutUs = () => {
        window.scrollTo({
            top: aboutUs.offsetTop,
            behavior: 'smooth',
        });
    };
    const scrollToInfo = () => {
        window.scrollTo({
            top: info.offsetTop,
            behavior: 'smooth',
        });
    };
    // const scrollToOrganizations = () => {
    //     window.scrollTo({
    //         top: organizations.offsetTop,
    //         behavior: 'smooth',
    //     });
    // };
    const scrollToContact = () => {
        window.scrollTo({
            top: contact.offsetTop,
            behavior: 'smooth',
        });
    };

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
                <li className="header_item" onClick={()=> scrollToInfo()}>O co chodzi?</li>
                <li className="header_item" onClick={()=> scrollToAboutUs()}>O nas</li>
                {/*<li className="header_item" onClick={()=> scrollToOrganizations()}>Fundacja i organizacje</li>*/}
                <li className="header_item">Fundacja i organizacje</li>
                <li className="header_item" onClick={()=> scrollToContact()}>Kontakt</li>
            </ul>
        </div>
    )
}