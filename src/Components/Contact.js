import React, { useState, useEffect} from 'react';
import Footer from './Footer';
import Decoration from "./Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./Firebase";

const CONTACT_URL = "https://fer-api.coderslab.pl/v1/portfolio/contact"

export default function Contact() {
    const [user, loading] = useAuthState(auth);
    const [name, setName] =useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [formSent, setFormSent] = useState(false);
    const [successMessage1] = useState("Wiadomość została wysłana.");
    const [successMessage2] = useState("Wkrótce się skontaktujemy.");

    //Wyłączenie domyślnej walidacji
    document.addEventListener('invalid', (function () {
        return function (e) {
            e.preventDefault();
        };
    })(), true);

    //Walidacja Name
    function isValidName() {
        if(name.includes(" ")) {
            setNameError("Podane imię jest nieprawidłowe")
        }
        else {
            setNameError("")
        }
    }

    //Walidacja Email
    function isValidEmail() {
        return /^\S+@\S+\.\S+$/.test(email)
    }

    function handleEmailChange(){
        if(!isValidEmail(email)){
            return setEmailError("Podany email jest nieprawidłowy")
        }
        else {
            setEmailError("")
        }
    }

    //Walidacja Message
    function isValidMessage(){
        if(message.length < 120) {
            setMessageError("Wiadomość musi mieć co najmniej 120 znaków")
        }
        else {
            setMessageError("")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        isValidName();
        handleEmailChange();
        isValidEmail();
        if(nameError === "" && emailError === "" && messageError === ""){
            fetch(CONTACT_URL, {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
                headers: {"Content-Type": "application/json"},
            }).then(() => {
                setFormSent(true)
                setName("");
                setEmail("");
                setMessage("");
        }).catch ((error) => {
            console.error(error);
        })
        }
    }
console.log(user)

    return(
        <div name="contact" className="contact">
            <div className="contact_background"></div>
            <div className="contact_container">
            <div className="contact_title">Skontaktuj się z nami</div>
            <Decoration/>
                {formSent ?
                    <div className="contact_succesMessages">
                        <div className="contact_succesMessages_message1"
                             style={{textAlign: "center", fontSize: "0.8vw", fontWeight: "600", color: "#28931F", marginBottom: "0.3vh"}}>
                            <p>{successMessage1}</p></div>
                        <div className="contact_succesMessages_message2"
                             style={{textAlign: "center", fontSize: "0.8vw", fontWeight: "600", color: "#28931F", marginBottom: "0.3vh"}}>
                            <p>{successMessage2}</p></div>
                    </div>
                : <></>}
            <form className="contact_form" onSubmit={handleSubmit}>
                <div className="contact_form_container">
                    <div className="contact_form_nameAndEmail">
                        <div className="contact_form_title">Wpisz swoje imię</div>
                        <input className="contact_form_data"
                               style={{borderBottom: (!nameError ? "1px solid black" : "1px solid #FA4848")}}
                               type="name"
                               onChange={(e) => {
                                   e.preventDefault()
                                   isValidName()
                                   setName(e.target.value)}}/>
                        <div className="contact_form_data_error"
                             style={{fontSize: "0.8vh", fontWeight: "600", color: "#FA4848"}}>{nameError}</div>
                    </div>
                    <div className="contact_form_nameAndEmail">
                        <div className="contact_form_title">Wpisz swój email</div>
                        <input className="contact_form_data"
                               style={{borderBottom: (!emailError  ? "1px solid black" : "1px solid #FA4848")}}
                               type="email"
                               placeholder={(user ? user.email : "")}
                               onChange={(e) => {
                                   e.preventDefault()
                                   handleEmailChange()
                                   setEmail(e.target.value)
                               }}/>
                        <div className="contact_form_data_error"
                        style={{fontSize: "0.8vh", fontWeight: "600", color: "#FA4848"}}>{emailError}</div>
                    </div>
                </div>
                <div className="contact_message">
                    <div className="contact_form_title">Wpisz swoją wiadomość</div>
                    <textarea className="contact_message_text"
                              style={{borderBottom: (!messageError  ? "1px solid black" : "1px solid red")}}
                              name="message"
                              placeholder="Proszę wpisać co najmniej 120 znaków"
                              onChange={(e) => {
                                  e.preventDefault()
                                  isValidMessage()
                                  setMessage(e.target.value)
                              }}/>
                    <div className="contact_form_data_error"
                         style={{fontSize: "0.8vh", fontWeight: "600", color: "#FA4848"}}>{messageError}</div>
                </div>
                <div className="contact_form_wrapper">
                    <button type="submit" className="contact_form_button">Wyślij</button>
                </div>
            </form>
            </div>
            <Footer/>
        </div>
    )
}