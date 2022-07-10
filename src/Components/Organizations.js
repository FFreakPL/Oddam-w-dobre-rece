import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Firebase from './Firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, db} from "./Firebase";
import {collection, onSnapshot, query, orderBy, startAfter, limit, getDocs} from "firebase/firestore";
import Decoration from "./Decorations/Decoration";

export default function Organizations(){
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("")
    const [organizations, setOrganizations] = useState([]);
    const [foundations, setFoundations] = useState([]);
    const [locals, setLocals] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "foundations"), (foundations) => {
            setFoundations(foundations.docs.map(doc => doc.data()))
        })
        onSnapshot(collection(db, "organizations"), (organizations) => {
            setOrganizations(organizations.docs.map(doc => doc.data()))
        })
        onSnapshot(collection(db, "locals"), (locals) => {
            setLocals(locals.docs.map(doc => doc.data()))
        })
    }, [])
    useEffect(() => {
        foundations.sort(function(a,b) {
                return a.name.localeCompare(b.name)})
    },[foundations])
    useEffect(() => {
        organizations.sort(function(a,b) {
            return a.name.localeCompare(b.name)})
    },[organizations])
    useEffect(() => {
        locals.sort(function(a,b) {
            return a.name.localeCompare(b.name)})
    },[locals])


    return (
        <div className="organizations">
            <div className="organizations_container">
                <p className="organizations_title">Komu pomagamy?</p>
                <Decoration/>
                <div className="organizations_wrapper">
                    <div className="organizations_btn" onClick={(e) => {
                        e.preventDefault()
                        setName("foundations")
                    }}>Fundacjom</div>
                    <div className="organizations_btn" onClick={(e) => {
                        e.preventDefault()
                        setName("organizations")
                    }}>Organizacjom<br></br>pozarządowym</div>
                    <div className="organizations_btn" onClick={(e) => {
                        e.preventDefault()
                        setName("locals")
                    }}>Lokalnym<br></br>zbiórkom</div>
                </div>
                <div className="organizations_info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
                {name === "foundations" ?
                <ul className="organizations_list">
                    {foundations.map((foundation) =>
                        <div className="organizations_list_container" key={foundation.name}>
                            <li key={foundation.name} className="organizations_list_item">
                                {foundation.name}<p>{foundation.info}</p>
                            </li>
                            <div className="organizations_list_things">{foundation.things}</div></div>)}
                </ul>
                : <></>}
                {name === "organizations" ?
                    <ul className="organizations_list">
                        {organizations.map((organization) =>
                            <div className="organizations_list_container" key={organization.name}>
                                <li key={organization.name} className="organizations_list_item">
                                    {organization.name}<p>{organization.info}</p>
                                </li>
                                <div className="organizations_list_things">{organization.things}</div>
                            </div>)}
                    </ul>
                : <></>}
                {name === "locals" ?
                <ul className="organizations_list">
                    {locals.map((local) =>
                        <div className="organizations_list_container" key={locals.name}>
                            <li key={local.name} className="organizations_list_item">
                                {local.name}<p>{local.info}</p>
                            </li>
                            <div className="organizations_list_things">{local.things}</div></div>)}
                </ul>
                : <></>}
            </div>
        </div>
    )
}