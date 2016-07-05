import React from 'react';
import ManageRegisterForm from '../containers/ManageRegisterForm';
import ManageLoginForm from '../containers/ManageLoginForm';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div>
        <ManageLoginForm />
      </div>
      <div>
        <ManageRegisterForm />
      </div>
    </div>
  );
};

export default WelcomePage;
