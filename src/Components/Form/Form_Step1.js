import React, {useContext, useState} from "react";
import FormButton from "../Buttons/Button_Form";
import {DataContext} from "./Form_Steps_Home";

export default function Form_Step1() {
    const [things, setThings] = useState([
        "ubrania, które nadają się do ponownego użycia",
        "ubrania, do wyrzucenia",
        "zabawki",
        "książki",
        "inne"])
    const [selectedThing, setSelectedThing] = useState("")
    const {state, setState } = useContext(DataContext);
    function handleChange(e) {
        if (e.target.value === things) {
            setSelectedThing("");
        } else {
            setSelectedThing(e.target.value);
        }
    }
    // const handleChange = ({ target: { name } }) => {
    //     if (things.includes(name)) {
    //         setThings(prev => prev.filter(el => el !== name))
    //
    //         return;
    //     }
    //
    //     setThings(prev => ([
    //         ...prev,
    //         name
    //     ]))
    // }
    const handleNext = () => {
        setState(prev => ({
            ...prev,
            things,
            selectedThing,
            step: prev.step + 1
        }))
    }
    console.log(state);
    return (
        <div className="step">
            <div className="step_counter">Krok 1/4</div>
            <div className="step_container">
                <div className="step_title">Zaznacz co chcesz dodać:</div>
                <div className="step_items" onChange={handleChange}>
                    {things.map((item, index) => (
                        <div className="step_item" key={index}>
                            <input
                                value={item}
                                type="radio"
                                // checked={things.includes(item)}
                                name="things"
 />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            {selectedThing.length !== 0 && <FormButton props={handleNext} name={"Dalej"}/>}
        </div>
    )
}