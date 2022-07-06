import React, { useState, useEffect} from 'react';
import Decoration from "./Decorations/Decoration";
import Signature from "../assets/Signature.svg"

export default function AboutUs(){

    return (
        <div className="aboutUs">
            <div className="aboutUs_container">
                <div className="aboutUs_info">
                    <p className="aboutUs_info_title">O nas</p>
                    <Decoration/>
                    <p className="aboutUs_description">Nori grape silver beet broccoli kombu beet greens fava bean
                        potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
                        greens parsnip.</p>
                    <img className="aboutUs_signature" src={Signature}/>
                </div>
                <div className="aboutUs_image"/>
            </div>
        </div>
    )
}