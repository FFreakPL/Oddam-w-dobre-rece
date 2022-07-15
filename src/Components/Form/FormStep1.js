import React, {useContext, useState} from "react";
import FormButton from "../Buttons/ButtonForm";
import {DataContext} from "./FormStepsHome";
import FormImportant from "./FormImportant";


export default function FormStep1() {
    const things = [
        "ubrania, które nadają się do ponownego użycia",
        "ubrania, do wyrzucenia",
        "zabawki",
        "książki",
        "inne"]
    const {state, setState } = useContext(DataContext);
    const [selectedThing, setSelectedThing] = useState(state.things)

    const handleChange = ({ target }) => {
        if (selectedThing.includes(target.name)) {
            setSelectedThing(prev => prev.filter(el => el !== target.name))
            return;
        }
        setSelectedThing(target.name)
    }
    const handleNext = () => {
        setState(prev => ({
            ...prev,
            things: selectedThing,
            step: prev.step + 1
        }))
    }

    return (
        <>
            <FormImportant text={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy " +
                "wiedzieć komu najlepiej je przekazać."}/>
            <div className="step">
                <div className="step_counter">Krok 1/4</div>
                <div className="step_container">
                    <div className="step_title">Zaznacz co chcesz dodać:</div>
                    <div className="step_items">
                        {things.map((item, index) => (
                            <div className="step_item" key={index}>
                                <input
                                    type="radio"
                                    checked={selectedThing.includes(item)}
                                    name={item}
                                    onChange={handleChange}
                                />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedThing.length !== 0 && <FormButton props={handleNext} name={"Dalej"}/>}
            </div>
        </>
    )
}