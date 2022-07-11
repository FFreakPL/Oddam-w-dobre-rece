import React from 'react';

export default function FormButtonForward({props}) {
    return (
        <>
            <button type="button"
                    className="step_button"
                    onClick={props}>Dalej</button>
        </>
    )
}