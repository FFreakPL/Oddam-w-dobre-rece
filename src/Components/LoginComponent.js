import React, { useState, useEffect} from 'react';
import Decoration from "./Decorations/Decoration";
import { useNavigate, Link } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LoginComponent(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) {
            return;
        }
        if (user) navigate("/");
    },[user, loading])


    return(
    <div className="login">
                    <div className="login_title">Zaloguj się</div>
                    <Decoration/>
                    <div className="login_container">
                        <div className="login_container_email">
                            <p className="login_textBox_title">Email</p>
                            <input
                               type="text"
                              className="login_textBox"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login_container_password">
                             <p className="login_textBox_title">Hasło</p>
                             <input
                                type="password"
                              className="login_textBox"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="login_btn_container">
                        <div className="login_register_button">
                            <Link to="/register">Załóż konto</Link>
                        </div>
                        <div className="login_forgotPassword">
                            <Link to="/reset">Zapomniałem hasła</Link>
                        </div>
                        <div
                            className="login_btn"
                            onClick={() => logInWithEmailAndPassword(email, password)}
                        ><Link to="/">Zaloguj się</Link>
                        </div>
                    </div>
                </div>
    )
}