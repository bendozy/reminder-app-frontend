import React, { PropTypes } from 'react';
import NavBar from '../common/Navbar';
import { Link } from 'react-router';

const HomePage = ({children, onLogout}) => {
  return (
      <div className="home">
          <NavBar />
        <div className="row">
          <div className="col-md-3 menu">
            <div className="list-group">
              <Link to="/" className="list-group-item">
                All Contacts
              </Link>
              <Link to="/contacts/add" className="list-group-item">
                Add Contact
              </Link>
              <Link to="/" onClick={onLogout} className="list-group-item">
                Logout
              </Link>
            </div>
          </div>
          <div className="col-md-9" >
            <div className="main-content" >
              {children}
            </div>
          </div>
        </div>
      </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.object.isRequired,
  onLogout: PropTypes.func
};

export default HomePage;
