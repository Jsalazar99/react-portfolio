import React, { useState } from 'react';
import Nav from './Nav';
import Main from './Main';
// import ReactDOM from 'react-dom/client';

export default function Header() {

    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
        <header className="header">
            <h1><a href="/">My Portfolio</a></h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <Main currentPage={currentPage} />
        </>
    );
}
