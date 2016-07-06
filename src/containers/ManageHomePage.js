import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePage from '../components/HomePage';
import ContacList from './ContactList';
import * as userActions from '../actions/userActions';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class ManageHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.actions.logoutUser()
      .then(function () {
        toastr.success('Logout Successful');
        browserHistory.push('/');
      });
  }

  render() {
    return (
      <HomePage onLogout={this.logoutUser} >
        <ContacList />
      </HomePage>
    );
  }

}

ManageHomePage.propTypes = {
  actions: PropTypes.object.isRequired,
};

ManageHomePage.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ManageHomePage);
