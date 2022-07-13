import React, {useContext, useState} from "react";
import FormButton from "../Buttons/ButtonForm";
import {DataContext} from "./FormStepsHome";

export default function FormStep2() {
    const bags = [1,2,3,4,5]
    const { state, setState } = useContext(DataContext);
    const [selectedBag, setSelectedBag] = useState(state.bags)

    const handleChange = ({ target }) => {

        if (selectedBag.includes(target.value)) {
            setSelectedBag(prev => prev.filter(el => el !== target.value))
            return;
        }
        setSelectedBag(target.value)
    }
    const handleNext = () => {
        setState(prev => ({
            ...prev,
            bags: selectedBag,
            step: prev.step + 1
        }))
    }
    const handleBack = () => {
        setState(prev => ({
            ...prev,
            bags: selectedBag,
            step: prev.step - 1
        }))
    }

    console.log(state.specificLocation)
    return (
        <div className="step">
            <div className="step_counter">Krok 2/4</div>
             <div className="step_container">
                 <div className="step_title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</div>
                 <div className="step_select_container">
                     <p>Liczba worków to:</p>
                     <select className="step_select" defaultValue={state.bags} onChange={handleChange}>
                         <option className="step_item_firstOne" value={'—— wybierz ——'} disabled>—— wybierz ——</option>
                         {bags.map((item, index) => (
                            <option
                                className="step_item"
                                value={item}
                                name={item}
                                key={index}
                                >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="step_buttons_container">
                <FormButton props={handleBack} name={"Wstecz"}/>
                <FormButton props={handleNext} name={"Dalej"}/>
            </div>
        </div>
    )
}