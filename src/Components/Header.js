import React from 'react';
import Nav from './Nav';
// import ReactDOM from 'react-dom/client';
//import './index.css';

function Header() {
    return (
        <header className="header">
            <img src="./assets/images/IMG_3011.jpeg" alt="Jesus Salazar" class="bio" />
            <div class="intro" id="home">
                <h1>My Portfolio</h1>
                <p>Portfolio website for the work of Jesus Salazar. </p>
            </div>
            <Nav />
        </header>
    );
}

export default Header;