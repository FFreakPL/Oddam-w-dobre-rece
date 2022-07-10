import React, { useState, useEffect} from 'react';
import Firebase from './Firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, db} from "./Firebase";
import {collection, onSnapshot, query, orderBy, startAfter, limit, getDocs} from "firebase/firestore";
import Decoration from "./Decorations/Decoration";
import Pagination from "./Pagination"

export default function Organizations(){
    // const [user, loading] = useAuthState(auth);
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

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(3);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentFoundations = foundations.slice(indexOfFirstRecord , indexOfLastRecord)
    const currentOrganizations = organizations.slice(indexOfFirstRecord , indexOfLastRecord)
    const currentLocals = locals.slice(indexOfFirstRecord , indexOfLastRecord)

    function paginate(pageNumber){
        setCurrentPage(pageNumber)
    }

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
                    <><ul className="organizations_list">
                    {currentFoundations.map((foundation) =>
                        <div className="organizations_list_container" key={foundation.name}>
                            <li key={foundation.name} className="organizations_list_item">
                                Fundacja "{foundation.name}"<p>{foundation.info}</p>
                            </li>
                            <div className="organizations_list_things">{foundation.things}</div>
                        </div>)}
                </ul>{foundations.length > recordsPerPage &&
                        <Pagination recordsPerPage={recordsPerPage}
                                 totalRecords={foundations.length}
                                    paginate={paginate}/>}</>
                : <></>}

                {name === "organizations" ?
                    <><ul className="organizations_list">
                        {currentOrganizations.map((organization) =>
                            <div className="organizations_list_container" key={organization.name}>
                                <li key={organization.name} className="organizations_list_item">
                                    Organizacja "{organization.name}"<p>{organization.info}</p>
                                </li>
                                <div className="organizations_list_things">{organization.things}</div>
                            </div>)}
                    </ul>{organizations.length > recordsPerPage &&
                        <Pagination recordsPerPage={recordsPerPage}
                                     totalRecords={organizations.length}
                                     paginate={paginate}/>}</>
                : <></>}

                {name === "locals" ?
                <><ul className="organizations_list">
                    {currentLocals.map((local) =>
                        <div className="organizations_list_container" key={local.name}>
                            <li key={local.name} className="organizations_list_item">
                               Zbiórka "{local.name}"<p>{local.info}</p>
                            </li>
                            <div className="organizations_list_things">{local.things}</div></div>)}
                </ul>{locals.length > recordsPerPage &&
                    <Pagination recordsPerPage={recordsPerPage}
                                 totalRecords={locals.length}
                                 paginate={paginate}/>}</>
                : <></>}

            </div>
        </div>
    )
}