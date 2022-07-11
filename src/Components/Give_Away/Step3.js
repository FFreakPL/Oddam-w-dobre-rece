import React, {useContext, useState} from "react";
import FormButton from "../Buttons/FormButtons";
import {DataContext} from "../StepsHome";

export default function Step1() {
    const [location, setLocation] = useState([
        "Poznań",
        "Warszawa",
        "Kraków",
        "Wrocław",
        "Katowice"])
    const [selectedLocation, setSelectedLocation] = useState("")
    const [help, setHelp] = useState([
        "dzieciom",
        "samotnym matkom",
        "bezdomnym",
        "niepełnosprawnym",
        "osobom starszym"])
    const [selectedHelp, setSelectedHelp] = useState([])
    const [specificLocation, setSpecificLocation] = useState("")
    const { setState } = useContext(DataContext);
    const handleChangeLocation = ({target : {value}}) => {
        if (location.includes(value)) {
            setSelectedLocation(value)
            return;
        }
        setSelectedLocation(value)
    }
    const handleChangeHelp = (e) => {
        let updatedData = [...selectedHelp];
        if (e.target.checked) {
            updatedData = [...selectedHelp, e.target.value];
        } else {
            updatedData.splice(selectedHelp.indexOf(e.target.value), 1);
        }
        setSelectedHelp(updatedData);
    };
    function handleChangeSpecificLocation(e) {
        if (e.target.value === specificLocation) {
            setSpecificLocation("");
        } else {
            setSpecificLocation(e.target.value);
        }
    }
    const handleNext = () => {
        setState(prev => ({
            ...prev,
            selectedLocation,
            selectedHelp,
            specificLocation,
            step: prev.step + 1
        }))
    }
    const handleBack = () => {
        setState(prev => ({
            ...prev,
            step: prev.step - 1
        }))
    }
    return (
        <div className="step">
            <div className="step_counter">Krok 3/4</div>
            <div className="step_container">
                <div className="step_title">Lokalizacja:</div>
                <select className="step_select" defaultValue={'—— wybierz ——'} onChange={handleChangeLocation}>
                    <option className="step_item_firstOne" value={'—— wybierz ——'} disabled>—— wybierz ——</option>
                    {location.map((item, index) => (
                        <option
                            className="step_item"
                            value={item}
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
                                type="checkbox"
                                name="step3_checkbox"
                                onChange={handleChangeHelp}/>
                            <label htmlFor={index}>{item}</label>
                        </li>
                    ))}
                </ul>
                <div className="step_localisationSpecific">Wpisz nazwę konkretnej ogranizacji (opcjonalnie)</div>
                <input type="text" className="step_localisationSpecific_input" onChange={handleChangeSpecificLocation}/>
            </div>
                <div className="step_buttons_container">
                    <FormButton props={handleBack} name={"Wstecz"}/>
                    <FormButton props={handleNext} name={"Dalej"}/>
                </div>
        </div>
    )
}