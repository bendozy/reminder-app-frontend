import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import RegisterForm from '../../components/landing/RegisterForm';
import toastr from 'toastr';

class ManageRegisterForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      register: {
        'username': '',
        'password': '',
        'confirmPassword': ''
      },
      errors: {},
      saving: false
    };

    this.registerUser = this.registerUser.bind(this);
    this.updateRegisterState = this.updateRegisterState.bind(this);
    this.validateElementsOnBlur = this.validateElementsOnBlur.bind(this);
  }

  registerFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.register.username.length < 5) {
      errors.username = 'Username must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
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
    this.setState({errors: errors});
  }

  updateRegisterState(event) {
    const field = event.target.name;
    let errors = {};
    let register = this.state.register;

    if (event.target.name === 'password'
        && this.state.register.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
      this.setState({errors: errors});
    } else {
      this.setState({errors: {}});
    }
    register[field] = event.target.value;
    return this.setState({register});
  }

  registerUser(event) {
    event.preventDefault();

    if (!this.registerFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.registerUser(this.state.register)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('User Created');
    // this.context.router.push('/dashboard');
  }

  render() {
    return (
      <RegisterForm
        onChange={this.updateRegisterState}
        onBlur={this.validateElementsOnBlur}
        onSave={this.registerUser}
        register={this.state.register}
        errors={this.state.errors}
        saving={this.state.saving} />
  );
  }
}

// ManageRegisterForm.propTypes = {
//   actions: PropTypes.object.isRequired
// };

//Pull in the React Router context so router is available on this.context.router.
ManageRegisterForm.contextTypes = {
  router: PropTypes.object
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ManageRegisterForm);
