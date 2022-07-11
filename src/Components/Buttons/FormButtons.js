import React from 'react';


export default function FormButton({props, name, style}) {
    return (
        <>
            <button type="button"
                className="step_button"
                onClick={props}
                style={style}>{name}</button>
        </>
    )
}



