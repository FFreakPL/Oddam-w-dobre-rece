import React, { useState, useEffect} from 'react';
import Facebook from "../assets/Facebook.svg"
import Instagram from "../assets/Instagram.svg"

export default function Home_Footer() {

    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_item">Copyright by Coders Lab</div>
                <div className="footer_logos">
                    <div className="footer_logo"><img src={Facebook} alt="facebook"/></div>
                    <div className="footer_logo"><img src={Instagram} alt="instagram"/></div>
                </div>
            </div>
        </div>
    )
}