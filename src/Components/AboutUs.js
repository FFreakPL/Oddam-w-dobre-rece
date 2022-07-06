import React, { useState, useEffect} from 'react';
import Decoration from "./Decorations/Decoration";

export default function AboutUs(){

    return (
        <div className="aboutUs">
            <div className="aboutUs_container">
                <div className="aboutUs_info">
                    <p className="aboutUs_info_title">O nas</p>
                    <Decoration/>
                </div>
            </div>
        </div>
    )
}