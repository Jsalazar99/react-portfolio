import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    // Conditional rendering for each section 
    return (
        <nav>
            {/*<!-- Navigation menu -->*/}
            <ul>
                <li><a href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >Home</a></li>
                <li><a href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About</a></li>
                <li><a href="#work"
                onClick={() => handlePageChange('Work')}
                className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                >Work</a></li>
                <li><a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;