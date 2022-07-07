import React, { useState, useEffect} from 'react';
import Decoration from "./Decorations/Decoration";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
} from "./Firebase";
import HeaderLogin from "./HeaderLogin";
import Header from "./Header";

export default function RegisterComponent(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    return (
        <>
            <div className="register">
                <div className="login_title">Załóż konto</div>
                <Decoration/>
                <div className="register_container">
                    <input
                        type="text"
                        className="register_textBox"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nick"
                    />
                    <input
                        type="text"
                        className="register_textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Adres E-mail"
                    />
                    <input
                        type="password"
                        className="register_textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Hasło"
                    />
                    <button className="register_btn" onClick={register}>
                        Załóż konto
                    </button>
                    <div className="login_btn_noFrame">
                        <Link to="/login">Zaloguj się</Link>
                    </div>
                </div>
            </div>
        </>
    )
}