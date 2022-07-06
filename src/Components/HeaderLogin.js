import React, { useState, useEffect} from 'react';

export default function HeaderLogin(){

    return (
        <div className="header_login">
            <button type="button" className="btn_login">Zaloguj</button>
            <button type="button" className="btn_register">Załóż konto</button>
        </div>
    )
}