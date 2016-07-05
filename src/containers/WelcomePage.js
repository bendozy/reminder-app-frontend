import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import * as userActions from '../actions/userActions';
import toastr from 'toastr';

class WelcomePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      register: {
        'username': '',
        'password': '',
        'confirmPassword': '',
      },
      login: {
        'username': '',
        'password': '',
      },
      loginErrors: {},
      loginSaving:false,
      registerErrors: {},
      registerSaving:false,
    };

    this.registerUser = this.registerUser.bind(this);
    this.updateRegisterState = this.updateRegisterState.bind(this);
    this.validateElementsOnBlur = this.validateElementsOnBlur.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.updateLoginState = this.updateLoginState.bind(this);
  }

  //RegisterForm functions
  registerFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.register.username.length < 5) {
      errors.username = 'Username must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({register: {errors: errors}});
    return formIsValid;
  }

  validateElementsOnBlur(event) {
    let errors = {};
    if (event.target.name === 'username'
        && this.state.register.username.length < 5) {
      errors.username = 'Username must be at least 5 characters.';
    }

    if (event.target.name === 'password'
        && this.state.register.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    if (event.target.name === 'confirmPassword'
      && this.state.register.password
      !== this.state.register.confirmPassword) {
      errors.confirmPassword = 'Password do not match.';
    }
    this.setState({ registerErrors: errors});
  }

  updateRegisterState(event) {
    const field = event.target.name;
    let errors = {};
    let register = this.state.register;

    if (event.target.name === 'password'
        && this.state.register.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    } else if (event.target.name === 'confirmPassword'
        && this.state.register.password
        !== this.state.register.confirmPassword) {
        errors.confirmPassword = 'Password do not match.';
    } else {
      errors = {};
    }
    register[field] = event.target.value;
    this.setState({registeErrors: errors});
    return this.setState({register});
  }

  registerUser(event) {
    event.preventDefault();

    if (!this.registerFormIsValid()) {
      return;
    }

    this.setState({registerSaving: true});

    this.props.actions.registerUser(this.state.register)
      .then(() => this.redirectRegisterSuccess())
      .catch(() => {
        toastr.error('Username already exists');
        this.setState({registerSaving: false});
      });
  }

  redirectRegisterSuccess() {
    this.setState({registerSaving: false});
    toastr.success('User Created');
    location.reload(false);
  }

  // LoginForm functions
  loginFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.login.username.length === 0) {
      errors.username = 'Username cannot be null.';
      formIsValid = false;
    }

    if (this.state.login.password.length === 0) {
      errors.password = 'Password cannot be null.';
      formIsValid = false;
    }

    this.setState({loginErrors: errors});
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

    this.setState({loginSsaving: true});

    this.props.actions.loginUser(this.state.login)
      .then(() => this.redirectLoginSucess())
      .catch(() => {
        toastr.error('Login Failed');
        this.setState({loginSaving: false});
      });
  }

  redirectLoginSucess() {
    this.setState({loginSaving: false});
    toastr.success('Login Sucessful');
    location.reload(false);
  }

  render(){
    return (
      <div className="welcome-page">
        <div>
          <RegisterForm
            onChange={this.updateRegisterState}
            onBlur={this.validateElementsOnBlur}
            onSave={this.registerUser}
            register={this.state.register}
            errors={this.state.registerErrors}
            saving={this.state.registerSaving} />
        </div>
        <div>
          <LoginForm
            onChange={this.updateLoginState}
            onSave={this.loginUser}
            login={this.state.login}
            errors={this.state.loginErrors}
            saving={this.state.loginSaving} />
        </div>
      </div>
    );
  }

}

WelcomePage.propTypes = {
  actions: PropTypes.object.isRequired,
};



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(WelcomePage);
