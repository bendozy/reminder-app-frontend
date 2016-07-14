import React from 'react';
import TextInput from '../common/TextInput';
import EmailInput from '../common/EmailInput';

const ContactForm = ({ contact, onSave, onBlur, onChange, saving, errors, isNew }) => {
  return (
    <form className="contact-form">
      <div className="form-shadow col-md-8">
        <h2>{isNew? 'Add Contact' : 'Update Contact'} </h2>
        <TextInput
          name="fullname"
          label="Full Name"
          value={contact.fullname}
          required="required"
          onChange={onChange}
          size={60}
          onBlur={onBlur}
          error={errors.fullname} />

        <TextInput
          name="telephone"
          label="Telephone"
          value={contact.telephone}
          required="required"
          onChange={onChange}
          size={60}
          onBlur={onBlur}
          error={errors.telephone} />

        <EmailInput
          name="email"
          label="Email"
          required="required"
          value={contact.email}
          size={60}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.email} />

        <TextInput
          name="birthday"
          label="Birthday"
          value={contact.birthday}
          required="required"
          size={60}
          placeholder="YYYY-MM-DD"
          onChange={onChange}
          onBlur={onBlur}
          error={errors.birthday} />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save Contact'}
          className="btn btn-primary"
          onClick={onSave} />
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  contact: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onBlur:React.PropTypes.func,
  isNew: React.PropTypes.bool.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
};

export default ContactForm;
