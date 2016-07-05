import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePage from '../components/HomePage';
import ContacList from './ContactList';
import * as contactActions from '../actions/contactActions';

class ManageHomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.logoutUser = this.logoutUser.bind(this);
  }

  conponentWillMount() {
    this.props.actions.loadContacts();
  }

  logoutUser() {
    alert('logout');
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
  actions: PropTypes.object.isRequired
};

ManageHomePage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(ManageHomePage);