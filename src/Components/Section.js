import React from 'react';
import image1 from '../images/mtn-image-1.jpg'
import image2 from '../images/mtn-image-2.jpg'
import image3 from '../images/mtn-image-3.jpg'


const listProjects = [
    { image: image1, title: "About Me", text: "A front-end developer with over 10 years knowledge of corporate web development and CMS experience. Currently expanding my skillset within React and other frontend technologies.", link: "https://github.com/Jsalazar99" },
    { image: image2, title: "HTML Refactor Project", text: "This project is to refactor a landing page for a marketing SEO company using semantic HTML and adding accessibility atttributes.", link: "https://jsalazar99.github.io/challenge-one/" },
    { image: image3, title: "Full Stack Flex Prework", text: "Introduction to HTML, CSS, and Javascript via the Git workflow. Also an intro to usage of the console log for debugging in JavaScript.", link: "https://jsalazar99.github.io/prework-study-guide/" }];

function Project() {
    return (
        <>
            {listProjects.map(({ image, title, text, link}, index) => (

                /*<!-- Project Component mapping through listProjects array -->*/
                <section className="card" key={index}>
                    <a href={link} target="_blank" rel="noreferrer">
                    <img src={image} alt={title} />
                    </a>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <a href={link} className="button" target="_blank" rel="noreferrer">{title}</a>
                </section>)
        )
};

</>
    );
}

export default Project;