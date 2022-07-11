import React from 'react';


export default function FormButton({props, name}) {
    return (
        <>
            <button type="button"
                className="step_button"
                onClick={props}>{name}</button>
        </>
    )
}



