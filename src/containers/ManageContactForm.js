import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../actions/contactActions';
import ContactForm from '../components/ContactForm';
import toastr from 'toastr';
import validator from 'validator';
import moment from 'moment';

class ManageContactForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      contact: {
        'fullname': '',
        'telephone': '',
        'email': '',
        'birthday': ''
      },
      errors: {},
      saving: false,
      isNew: true
    };

    this.contactUser = this.contactUser.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.updateContactState = this.updateContactState.bind(this);
  }

  contactFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.contact.fullname.length === 0) {
      errors.fullname = 'Full Name cannot be null.';
      formIsValid = false;
    }

    if (this.state.contact.telephone.length === 0) {
      errors.telephone = 'Telephone cannot be null.';
      formIsValid = false;
    }

    if (!(/^(\+?234)?[7-8]?[0-1]?\d{8}[0-9]$/.test(this.state.contact.telephone))) {
      errors.telephone = 'Telephone is not valid.';
    }

    if (this.state.contact.email.length === 0) {
      errors.email = 'Email cannot be null.';
      formIsValid = false;
    }

    if (!validator.isEmail(this.state.contact.email)) {
      errors.email = 'Email is not valid.';
      formIsValid = false;
    }

    if (this.state.contact.birthday.length === 0) {
      errors.birthday = 'Birthday cannot be null.';
      formIsValid = false;
    }

    if (!moment(this.state.contact.birthday,'YYYY-MM-DD').isValid()) {
      errors.birthday = 'Birthday is not a valid date.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  onBlur(event) {
    let errors = {};
    switch (event.target.name) {
      case 'fullname':
      if (this.state.contact.fullname.length === 0) {
        errors.fullname = 'Full Name cannot be null.';
      }
        break;
      case 'email':
      if (this.state.contact.email.length === 0) {
        errors.email = 'Email cannot be null.';
      } else if (!validator.isEmail(this.state.contact.email)) {
        errors.email = 'Email is not valid.';
      }
        break;
      case 'birthday':
      if (this.state.contact.birthday.length === 0) {
        errors.birthday = 'Birthday cannot be null.';
      } else if (!moment(this.state.contact.birthday,'YYYY-MM-DD').isValid()) {
        errors.birthday = 'Birthday is not a valid date.';
      }
        break;
      case 'telephone':
      if (this.state.contact.telephone.length === 0) {
        errors.telephone = 'Telephone cannot be null.';
      } else if (!(/^(\+?234)?[7-8]?[0-1]?\d{8}[0-9]$/.test(this.state.contact.telephone))) {
        errors.telephone = 'Telephone is not valid.';
      }
        break;
      default:
        break;

    }
    this.setState({errors});
  }

  updateContactState(event) {
    const field = event.target.name;
    let contact = this.state.contact;

    contact[field] = event.target.value;
    return this.setState({contact});
  }

  contactUser(event) {
    event.preventDefault();

    if (!this.contactFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    if(this.state.isNew) {
      this.createContact();
    } else {
      this.updateContact();
    }
  }

  createContact() {
    this.props.actions.createContact(this.state.contact)
      .then(() => this.redirect())
      .catch(error => {
        console.log(error);
        toastr.error(error);
        this.setState({saving: false});
     });
  }

  updateContact() {
    this.props.actions.updateContact(this.state.contact)
      .then(() => this.redirect())
      .catch(error => {
        console.log(error);
        toastr.error(error);
        this.setState({saving: false});
     });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Contact Saved');
    this.context.router.push('/');
  }

  render() {
    return (
      <ContactForm
        onChange={this.updateContactState}
        onBlur={this.onBlur}
        onSave={this.contactUser}
        contact={this.state.contact}
        errors={this.state.errors}
        saving={this.state.saving}
        isNew={this.state.isNew} />
  );
  }
}

ManageContactForm.propTypes = {
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageContactForm.contextTypes = {
  router: PropTypes.object
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ManageContactForm);
