import React, { useState, useEffect} from 'react';
import {db} from "./Utilities/UtilitiesFirebase";
import {collection, onSnapshot} from "firebase/firestore";

export default function HomeInfo() {
    const [firebaseData, setFirebaseData] = useState("")
    const [bags, setBags] = useState("")

    useEffect(() => {
        onSnapshot(collection(db, "formData"), (firebaseData) => {
            setFirebaseData(firebaseData.docs.map(doc => doc.data()))
        })
    },[])

    //Bags amount from Firebase
    useEffect(() => {
        if (firebaseData) {
            const bagsSum = firebaseData.reduce((a, b) => {
                return a + b.bags;
                bagsSum();
            }, 0)
            setBags(bagsSum)
        }
    },[firebaseData])

    console.log(bags)

    return (
        <div name="info" className="info">
            <div className="info_container">
                <div className="info_item">
                    <p className="info_item_number">{bags}</p>
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