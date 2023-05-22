import React from 'react';
import image1 from '../images/project1.png'
import image2 from '../images/project2.png'
import image3 from '../images/project3.png'
import image4 from '../images/project4.png'
import image5 from '../images/project5.png'
import image6 from '../images/project6.png'

const listProjects = [
    { image: image1, title: "Wall Street Curiosity", text: "An interactive full-stack application that uses Node.js and Express.js to create a RESTful API.", link: "https://github.com/Jsalazar99/wall-street-curiosity" },
    { image: image2, title: "Stock Watchers!", text: "Front-end application project that uses 2 APIs along with CSS Materialize framework and local storage functionality.", link: "https://github.com/Jsalazar99/Stock-Watchers-" },
    { image: image3, title: "Note Taker App", text: "An application that uses an Express.js back-end and saves and retrieves note data from a JSON database file. ", link: "https://github.com/Jsalazar99/Note-Taker-App" },
    { image: image4, title: "Tech Blog Application", text: "This app uses the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the Express-Session NPM package for authentication.", link: "https://github.com/Jsalazar99/tech-blog-app" },
    { image: image5, title: "Weather Dashboard API", text: "This app utilizes the fetch API method to pull forecast information from the OpenWeather API.", link: "https://github.com/Jsalazar99/api-weather-dashboard" },
    { image: image6, title: "NoSQL Social Network API", text: "A back-end social network application that uses MongoDB database and the Mongoose ODM.", link: "https://github.com/Jsalazar99/NoSQL-Social-Network-API" }];

function Project() {
    return (
        <div className='projects'>
            {listProjects.map(({ image, title, text, link }, index) => (

                /*<!-- Project Component mapping through listProjects array -->*/
                <section className="card" key={index}>
                    <a href={link} target="_blank" rel="noreferrer">
                        <img src={image} alt={title} />
                    </a>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <a href={link} className="button" target="_blank" rel="noreferrer">{title}</a>
                </section>
                )
            )}
        </div>
    );
}

export default Project;