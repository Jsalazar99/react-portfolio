import React from 'react';
import imageHero from '../images/IMG_3011.jpeg'


function About() {

    return (
        <>
            <div className="intro" id="home">
                <p>A casual portfolio website for the work of Jess Salazar. </p>
                <p>A Front-End Developer with over 10 years knowledge of corporate web development experience.</p>
                <p>I enjoy building and maintaining websites that look great and work well. With a solid background in front-end development, the focus is always on making things easy to use, clean, and reliable—whether it's a big project or a small idea coming to life.</p>
            </div>
            <div>
                <img src={imageHero} alt="Jess Salazar" className="bio" />
            </div>

        </>
    );
}

export default About;