import React, { useState, useEffect} from 'react';
import ButtonGive from "./Buttons/ButtonGive";

export default function HomeGiveThings() {

    return (
        <div className="giveThings">
            <ButtonGive style={{marginBottom: "2vh"}}/>
        </div>
    )
}