import React, {useContext, useState} from "react";
import FormButton from "../Buttons/ButtonForm";
import {DataContext} from "./FormStepsHome";
import Cloth from "../../assets/Icon-1.svg";
import Refresh from "../../assets/Icon-4.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../Utilities/UtilitiesFirebase";
import { doc, setDoc } from "firebase/firestore";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../Utilities/UtilitiesFirebase";

export default function FormStep1() {
    const [user, loading] = useAuthState(auth);
    const { state, setState } = useContext(DataContext);

    console.log(state)
    const sendForm = async () => {
        setState(prev => ({
            ...prev,
            step: prev.step + 1
        }))
        try {
            const collectionRef = collection(db, "formData")
            const payload = {
                userUid: user.uid,
                userEmail: user.email,
                thingsToGive: state.things,
                bags: +state.bags,
                location: state.location,
                helpConsumer: state.help,
                specificLocation: state.specificLocation,
                city: state.city,
                street: state.street,
                postalCode: state.postalCode,
                phoneNumber: state.phoneNumber,
                date: state.date,
                hour: state.hour,
                comment: state.comment,
                }
            await addDoc(collectionRef, payload)
        }
        catch (err) {
            console.error(err);
            alert(err.message);
        }
        finally {
            alert("Formularz został wysłany! Dziękujemy za Twoją pomoc!")
        }
    };

    const handleBack = () => {
        setState(prev => ({
            ...prev,
            step: prev.step - 1
        }))
    }

    return (
        <>
            <div className="step">
                <div className="step_summary">
                    <div className="step_summary_title">Podsumowanie Twojej darowizny</div>
                    <div className="step_summary_upperInfo">
                        <p className="step_summary_upperInfo_subTitle3">Oddajesz:</p>
                        <div className="step_summary_upperInfo_container">
                            <div className="step_summary_container_info">
                                <img className="stepsInfo_summary_icon" src={Cloth}/>
                                <p>{state.bags} worki, {state.things}, {state.help}</p>
                            </div>
                            <div className="step_summary_container_info">
                                <img className="stepsInfo_item_icon" src={Refresh}/>
                                <p>dla lokalizacji: {state.specificLocation ? state.specificLocation : state.location}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="step_summary_container_adress">
                    <div className="step_summary_left">
                        <p className="step_summary_subTitle3">Adres odbioru</p>
                        <div className="step_summary_left_inputs">
                            <p>Ulica</p>
                            <div className="step_summary_left_inputs_street">{state.street}</div>
                        </div>
                        <div className="step_summary_left_inputs">
                            <p>Miasto</p>
                            <div className="step_summary_left_inputs_city">{state.city}</div>
                        </div>
                        <div className="step_summary_left_inputs">
                            <p>Kod<br></br>pocztowy</p>
                            <div className="step_summary_left_inputs_postalCode">{state.postalCode}</div>
                        </div>
                        <div className="step_summary_left_inputs">
                            <p>Numer<br></br>telefonu</p>
                            <div className="step_summary_left_inputs_phoneNumber">{state.phoneNumber}</div>
                        </div>
                    </div>
                    <div className="step_summary_right">
                        <p className="step_summary_subTitle3">Termin odbioru:</p>
                        <div className="step_summary_right_inputs">
                            <p>Data</p>
                            <div className="step_summary_right_inputs_date">{state.date}</div>
                        </div>
                        <div className="step_summary_right_inputs">
                            <p>Godzina</p>
                            <div className="step_summary_right_inputs_hour">{state.hour}</div>
                        </div>
                        <div className="step_summary_right_inputs">
                            <p>Uwagi<br></br>dla kuriera</p>
                            <div className="step_summary_right_inputs_comment">{state.comment}</div>
                        </div>
                    </div>
                </div>
                
                
                <div className="step_summary_buttons_container">
                    <FormButton props={handleBack} name={"Wstecz"}/>
                <FormButton props={sendForm} name={"Potwierdzam"}/>
            </div>
            </div>
        </>
    )
}