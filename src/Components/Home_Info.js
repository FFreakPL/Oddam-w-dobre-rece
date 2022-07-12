import React, { useState, useEffect} from 'react';

export default function Home_Info() {

    return (
        <div name="info" className="info">
            <div className="info_container">
                <div className="info_item">
                    <p className="info_item_number">10</p>
                    <p className="info_item_title">oddanych worków</p>
                    <p className="info_item_description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
                <div className="info_item">
                    <p className="info_item_number">5</p>
                    <p className="info_item_title">wspartych organizacji</p>
                    <p className="info_item_description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
                <div className="info_item">
                    <p className="info_item_number">7</p>
                    <p className="info_item_title">zorganizowanych zbiórek</p>
                    <p className="info_item_description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    )
}