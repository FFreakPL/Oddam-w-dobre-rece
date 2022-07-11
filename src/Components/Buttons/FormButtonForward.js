import React from 'react';

export default function FormButtonForward({props, style}) {
    return (
        <>
            <button type="button"
                    className="step_button"
                    onClick={props}
                    style={style}>Dalej</button>
        </>
    )
}