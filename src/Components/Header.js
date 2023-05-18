import React from 'react';
import Nav from './Nav';
import imageHero from '../images/IMG_3011.jpeg'
// import ReactDOM from 'react-dom/client';

function Header() {
    return (
        <header className="header">
            <img src={imageHero} alt="Jesus Salazar" className="bio" />
            <div className="intro" id="home">
                <h1>My Portfolio</h1>
                <p>Portfolio website for the work of Jesus Salazar. </p>
            </div>
            <Nav />
        </header>
    );
}

export default Header;