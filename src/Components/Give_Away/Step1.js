import React, {useContext, useState} from "react";
import FormButton from "../Buttons/FormButtons";
import {DataContext} from "../StepsHome";

export default function Step1() {
    const [things, setThings] = useState([
        "ubrania, które nadają się do ponownego użycia",
        "ubrania, do wyrzucenia",
        "zabawki",
        "książki",
        "inne"])
    const [selectedThing, setSelectedThing] = useState("")
    const {setState } = useContext(DataContext);

    function handleChange(e) {
        if (e.target.value === things) {
            setSelectedThing("");
        } else {
            setSelectedThing(e.target.value);
        }
    }

    // const handleChange = ({ target: { item } }) => {
    //     if (things.includes(item)) {
    //         setThings(prev => prev.filter(el => el !== item))
    //
    //         return;
    //     }
    //     console.log(item);
    //     setThings(prev => ([
    //         ...prev,
    //         item
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
            {things.length !== 0 && <FormButton props={handleNext} name={"Dalej"}/>}
        </div>
    )
}