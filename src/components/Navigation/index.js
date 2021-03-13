import React from 'react';

function Navigation(props) {
  const pages = ['About', 'Contact', 'Portfolio', 'Resume']
  return (
    <ul className="nav nav-tabs">
      {pages.map(tab => (
        <li className="nav-pages" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.setCurrentPage(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;