import React from 'react';
import {Link} from 'react-router';

const NavBar = () => {
  const titleLink = {
    color: 'white'
  };

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand" style={titleLink}>Contact Manager</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
