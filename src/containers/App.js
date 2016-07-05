import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import * as contactActions from '../actions/contactActions';
import ManageHomePage from '../containers/ManageHomePage';
import WelcomePage from '../components/WelcomePage';
import toastr from 'toastr';

class App extends Component {
  constructor (props) {
    super(props);
    
    this.logoutUser = this.logoutUser.bind(this);
  }


  logoutUser() {
    this.props.actions.logoutUser()
      .then(function () {
        this.context.router.push('/');
        toastr.success('Logout Successful');
      })
      .catch(function () {
        toastr.error('Logout Error');
      });
  }

  renderWelcomePage() {
    return (
      <WelcomePage />
    );
  }

  renderHomePage() {
    return (
      <ManageHomePage />
    );
  }

  render() {
    return this.props.isAuthenticated
      ? this.renderHomePage()
      : this.renderWelcomePage();
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  actions: PropTypes.object
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.user;
  return { isAuthenticated };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      userActions: bindActionCreators(userActions, dispatch),
      contactActions: bindActionCreators(contactActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
