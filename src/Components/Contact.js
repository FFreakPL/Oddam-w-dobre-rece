import React, { useState, useEffect} from 'react';
import Footer from './Footer';
import Decoration from "./Decorations/Decoration";

export default function Contact() {

    return(
        <div name="contact" className="contact">
            <div className="contact_background"></div>
            <div className="contact_container">
            <div className="contact_title">Skontaktuj się z nami</div>
            <Decoration/>
            <form className="contact_form">
                <div className="contact_form_container">
                    <div className="contact_form_nameAndEmail">
                        <div className="contact_form_title">Wpisz swoje imię</div>
                        <input className="contact_form_data"
                               type="name"
                            placeholder="Paweł"/>
                    </div>
                    <div className="contact_form_nameAndEmail">
                        <div className="contact_form_title">Wpisz swój email</div>
                        <input className="contact_form_data"
                               type="email"
                            placeholder="ffreakpl@gmail.com"/>
                    </div>
                </div>
                <div className="contact_message">
                    <div className="contact_form_title">Wpisz swoją wiadomość</div>
                    <textarea className="contact_message_text"
                              minLength="100"
                              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
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