import React from 'react';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';

const RegisterForm = ({ register, onSave, onChange, onBlur, saving, errors }) => {
  return (
    <form className="register-form">
      <div className="form-shadow col-md-offset-4 col-md-4">
        <h2>Create Account</h2>
        <TextInput
          name="username"
          placeholder="Username"
          value={register.username}
          required="required"
          size={60}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.username} />

        <PasswordInput
          name="password"
          size={60}
          placeholder="Password"
          required="required"
          value={register.password}
          onChange={onChange}
          error={errors.password} />

        <PasswordInput
          name="confirmPassword"
          required="required"
          size={60}
          placeholder="Confirm Password"
          value={register.confirmPassword}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.confirmPassword} />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Registering...' : 'Register'}
          className="btn btn-primary"
          onClick={onSave} />
      </div>
    </form>
  );
};

RegisterForm.propTypes = {
  register: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default RegisterForm;
