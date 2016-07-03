import React from 'react';
import ManageRegisterForm from '../../containers/landing/ManageRegisterForm';
import ManageLoginForm from '../../containers/landing/ManageLoginForm';

const WelcomePage = () => {
  return (
    <div>
      <div>
        <ManageRegisterForm />
      </div>
      <div>
        <ManageLoginForm />
      </div>
    </div>
  );
};

export default WelcomePage;
