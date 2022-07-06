import React, { useState, useEffect} from 'react';

export default function Header() {

    return (
        <div className="header">
            <ul className="header_list">
                <li className="header_item">Start</li>
                <li className="header_item">O co chodzi?</li>
                <li className="header_item">O nas</li>
                <li className="header_item">Fundacja i organizacje</li>
                <li className="header_item">Kontakt</li>
            </ul>
        </div>
    )
}