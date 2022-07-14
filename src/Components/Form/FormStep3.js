import React, {useContext, useState} from "react";
import FormButton from "../Buttons/ButtonForm";
import {DataContext} from "./FormStepsHome";
import FormImportant from "./FormImportant";

export default function FormStep3() {
    const { state, setState } = useContext(DataContext);
    const location = [
        "Poznań",
        "Warszawa",
        "Kraków",
        "Wrocław",
        "Katowice"]
    const help = [
        "dzieciom",
        "samotnym matkom",
        "bezdomnym",
        "niepełnosprawnym",
        "osobom starszym"]
    const [selectedLocation, setSelectedLocation] = useState(state.location)
    const [selectedHelp, setSelectedHelp] = useState(state.help)
    const [specific, setSpecific] = useState(state.specificLocation)

    const handleChangeLocation = ({ target }) => {
        if (selectedLocation.includes(target.value)) {
            setSelectedLocation(prev => prev.filter(el => el !== target.value))
            return;
        }
        setSelectedLocation(target.value)
    }
    const handleChangeHelp = ({ target }) => {
        if (selectedHelp.includes(target.value)) {
            setSelectedHelp(prev => prev.filter(el => el !== target.value))
            return;
        }
        setSelectedHelp(prev => ([
            ...prev,
            target.value,
        ]))
    }
    const handleChangeSpecific = ({ target }) => {
        setSpecific(prev => target.value)
    }

    const handleNext = () => {
        setState(prev => ({
            ...prev,
            location: selectedLocation,
            help: selectedHelp,
            specificLocation: specific,
            step: prev.step + 1
        }))
    }
    const handleBack = () => {
        setState(prev => ({
            ...prev,
            location: selectedLocation,
            help: selectedHelp,
            specificLocation: specific,
            step: prev.step - 1
        }))
    }

    function showAlert(){
        return alert("Podaj lokalizację i wybierz komu chcesz pomóc!")
    }

    return (
        <>
            <FormImportant text={`Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. 
            Możesz też filtrować organizacja
            po ich lokalizacji bądź celu ich pomocy`}/>
            <div className="step">
                <div className="step_counter">Krok 3/4</div>
                <div className="step_container">
                    <div className="step_title">Lokalizacja:</div>
                    <select className="step_select"
                            defaultValue={state.location}
                            onChange={handleChangeLocation}>
                        <option className="step_item_firstOne"
                                value={'—— wybierz ——'}
                                disabled>—— wybierz ——</option>
                        {location.map((item, index) => (
                            <option
                                className="step_item"
                                value={item}
                                name={item}
                                key={index}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <p className="step_subTitle1">Komu chcesz pomóc?</p>
                    <ul className="step_items_step3">
                        {help.map((item, index) => (
                            <li className="step_item_checkbox" key={index}>
                                <input
                                    value={item}
                                    className="step_item_checkbox_element"
                                    id={index}
                                    checked={selectedHelp.includes(item)}
                                    type="checkbox"
                                    name="step3_checkbox"
                                    onChange={handleChangeHelp}/>
                                <label htmlFor={index}>{item}</label>
                            </li>
                        ))}
                    </ul>
                    <div className="step_localisationSpecific">Wpisz nazwę konkretnej ogranizacji (opcjonalnie)</div>
                    <input type="text"
                           name="specificLocation"
                           className="step_localisationSpecific_input"
                           defultValue={state.specificLocation}
                           onChange={handleChangeSpecific}
                    />
                </div>
                <div className="step_buttons_container">
                    <FormButton props={handleBack} name={"Wstecz"}/>
                    {((selectedLocation !== `—— wybierz ——` || specific) && selectedHelp.length > 0)
                        ? <FormButton props={handleNext} name={"Dalej"}/>
                        : <FormButton props={showAlert} name={"Dalej"}/>}
                </div>
            </div>
        </>
    )
}