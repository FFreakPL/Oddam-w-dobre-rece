import React, { useState, useEffect} from 'react';
import Decoration from "../Decorations/Decoration";
import { useNavigate, Link } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../Utilities/Utilities_Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Auth_Login_Component(){
    const [user, loading] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) {
            return;
        }
        if (user) navigate("/");
    },[user, loading])


    // //Walidacja emaila
    // function isValidEmail() {
    //     return /^\S+@\S+\.\S+$/.test(email)
    // }
    //
    // function handleEmailChange(){
    //     if(!isValidEmail(email)){
    //         return setEmailError("Podany email jest nieprawidłowy!")
    //     }
    //     else {
    //         setEmailError("")
    //     }
    // }
    // //Walidacja hasła
    // function isValidPassword() {
    //     if(password.length < 6) {
    //         setPasswordError("Pole hasło jest za krótkie!")
    //     }
    //     else {
    //         setPasswordError("")
    //     }
    // }

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
                               onChange={(e) => {
                                   // e.preventDefault()
                                   // handleEmailChange()
                                   setEmail(e.target.value)
                               }}
                            />
                            <div className="login_email_error"
                                 style={{fontSize: "0.8vh", fontWeight: "600", color: "#FA4848"}}>{emailError}</div>
                        </div>
                        <div className="login_container_password">
                             <p className="login_textBox_title">Hasło</p>
                             <input
                                type="password"
                              className="login_textBox"
                              value={password}
                              onChange={(e) => {
                                  // e.preventDefault()
                                  // isValidPassword()
                                  setPassword(e.target.value)
                              }}
                        />
                            <div className="login_password_error"
                                 style={{fontSize: "0.8vh", fontWeight: "600", color: "#FA4848"}}>{passwordError}</div>
                        </div>
                    </div>
                    <div className="login_btn_container">
                        <div className="login_register_button">
                            <Link to="/register">Załóż konto</Link>
                        </div>
                        <div className="login_forgotPassword">
                            <Link to="/reset">Zapomniałem hasła</Link>
                        </div>
                        {!emailError && !passwordError ? <div
                            className="login_btn"
                            onClick={() => logInWithEmailAndPassword(email, password)}
                        ><Link to="/">Zaloguj się</Link>
                        </div> : <></>}
                    </div>
                </div>
    )
}