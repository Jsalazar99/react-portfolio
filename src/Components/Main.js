import React, { useState } from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Aside from './Aside';
import Resume from './Resume';

export default function Main({ currentPage }) {

    //const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <About />;
        }
        else if (currentPage === 'About') {
            return <About />;
          }
        else if (currentPage === 'Projects') {
          return <Projects />;
        }
        else if (currentPage === 'Contact') {
                return <Contact />;
        }
        else if (currentPage === 'Resume') {
                return <Resume />;
        }
        else {
            return null;
        }
      };
      
      //const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='container'>
        <Aside />
      {renderPage()}      
    </div>
  );
}