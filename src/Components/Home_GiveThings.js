import React, { useState, useEffect} from 'react';
import Button_Give from "./Buttons/Button_Give";

export default function Home_GiveThings() {

    return (
        <div className="giveThings">
            <Button_Give style={{marginBottom: "2vh"}}/>
        </div>
    )
}