import React, { useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {useNavigate} from "react-router-dom";

export default function Header({styling}) {
    const [about, setAbout] = useState();
    const [info, setInfo] = useState();
    // const [org, setOrg] = useState();
    const [contact, setContact] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setAbout(document.querySelector('.aboutUs').offsetTop);
    },[about]);
    useEffect(() => {
        setInfo(document.querySelector('.info').offsetTop);
    },[info]);
    // useEffect(() => {
    //     setOrg(document.querySelector('.organisations').offsetTop);
    // },[org]);
    useEffect(() => {
        setContact(document.querySelector('.contact').offsetTop);
    },[contact]);

    function handleClick() {
        navigate("/");
    }

    function scrollToAboutUs() {
        window.scrollTo({
            top: about,
            behavior: 'smooth',
        });
    }
    function scrollToInfo() {
        window.scrollTo({
            top: info,
            behavior: 'smooth',
        });
    }
    // function scrollToOrganizations() {
    //     window.scrollTo({
    //         top: org,
    //         behavior: 'smooth',
    //     },[org]);
    // }
    function scrollToContact() {
        window.scrollTo({
            top: contact,
            behavior: 'smooth',
        });
    }

    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "6vh",
        width: "50vw",
    }

    return (
        <div className="header" style={styling}>
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