import React from 'react';
import imageHero from '../images/IMG_3011.jpeg'


function About() {

    return (
        <>
            <div>
                <img src={imageHero} alt="Jess Salazar" className="bio" />
            </div>
            <div className="intro" id="home">
                <p>Portfolio website for the work of Jess Salazar. </p>
                <p>A Front-End Developer with over 10 years knowledge of corporate web development experience.</p>
            </div>

        </>
    );
}

export default About;