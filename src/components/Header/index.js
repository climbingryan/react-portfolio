import React, { useState } from 'react';
import Navigation from '../Navigation'

import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

const Header = () => {

    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        switch(currentPage) {
            default:
              return <About />
            case 'Contact': 
              return <Contact />
              break
            case 'Portfolio':
              return <Portfolio />
              break
            case 'Resume': 
              return <Resume />
              break
        }
    }

    return (
        <div>
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div>
              {
                renderPage()
              }
          </div>
        </div>
    )
}

export default Header