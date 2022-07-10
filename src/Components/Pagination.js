import React, { useState, useEffect} from 'react';

export default function Pagination({recordsPerPage, totalRecords, paginate}){
    const pageNumbers = [];

        for(let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
            pageNumbers.push(i)
        }


    // console.log(pageNumbers)
    return (
        <nav className="pagination_nav">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination_page">
                        <a onClick={() => paginate(number)} className="pagination_link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}