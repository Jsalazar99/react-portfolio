import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Section from './Section';
import Contact from './Contact';

export default function Projects() {
const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Header />;
    }
    if (currentPage === 'Work') {
      return <Section />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
     
      {renderPage()}
    </div>
  );
}