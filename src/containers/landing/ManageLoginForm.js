import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import LoginForm from '../../components/landing/LoginForm';
import toastr from 'toastr';

class ManageLoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      login: {
        'username': '',
        'password': ''
      },
      errors: {},
      saving: false
    };

    this.loginUser = this.loginUser.bind(this);
    this.updateLoginState = this.updateLoginState.bind(this);
  }

  loginFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.login.username.length === 0) {
      errors.username = 'Username cannot be null.';
      formIsValid = false;
    }

    if (this.state.login.password.length === 0) {
      errors.username = 'Password cannot be null.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  updateLoginState(event) {
    const field = event.target.name;
    let login = this.state.login;

    login[field] = event.target.value;
    return this.setState({login});
  }

  loginUser(event) {
    event.preventDefault();

    if (!this.loginFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.loginUser(this.state.login)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Login Sucessful');
    this.context.router.push('/dashboard');
  }

  render() {
    return (
      <LoginForm
        onChange={this.updateLoginState}
        onSave={this.loginUser}
        login={this.state.login}
        errors={this.state.errors}
        saving={this.state.saving} />
  );
  }
}

ManageLoginForm.propTypes = {
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageLoginForm.contextTypes = {
  router: PropTypes.object
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ManageLoginForm);
