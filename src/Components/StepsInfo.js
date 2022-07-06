import React, { useState, useEffect} from 'react';
// import Decoration from "../assets/Decoration.svg"
import Cloth from "../assets/Icon-1.svg"
import Bag from "../assets/Icon-2.svg"
import Search from "../assets/Icon-3.svg"
import Refresh from "../assets/Icon-4.svg"
import Decoration from "./Decorations/Decoration";

export default function StepsInfo() {

    return (
        <div className="stepsInfo">
            <div className="stepsInfo_container">
            <p className="stepsInfo_title">Wystarczą 4 proste kroki</p>
            <Decoration/>
                <div className="stepsInfo_steps_container">
                    <div className="stepsInfo_item">
                        <img className="stepsInfo_item_icon" src={Cloth}/>
                        <p className="stepsInfo_item_title">Wybierz rzeczy</p>
                        <p className="stepsInfo_item_description">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="stepsInfo_item">
                        <img className="stepsInfo_item_icon" src={Bag}/>
                        <p className="stepsInfo_item_title">Spakuj je</p>
                        <p className="stepsInfo_item_description">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="stepsInfo_item">
                        <img className="stepsInfo_item_icon" src={Search}/>
                        <p className="stepsInfo_item_title">Zdecyduj komu chcesz pomóc</p>
                        <p className="stepsInfo_item_description">wybierz zaufane miejsce</p>
                    </div>
                    <div className="stepsInfo_item">
                        <img className="stepsInfo_item_icon" src={Refresh}/>
                        <p className="stepsInfo_item_title">Zamów kuriera</p>
                        <p className="stepsInfo_item_description">kurier przyjedzie w dogodnnym terminie</p>
                    </div>
                </div>
            </div>
        </div>
    )
}