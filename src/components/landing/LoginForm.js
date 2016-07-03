import React from 'react';
import TextInput from '../../common/TextInput';
import PasswordInput from '../../common/PasswordInput';

const LoginForm = ({ login, onSave, onChange, saving, errors }) => {
  return (
    <form className="login-form">
      <div className="form-shadow col-md-offset-4 col-md-4">
        <h2>Sign In</h2>
        <TextInput
          name="username"
          placeholder="Username"
          value={login.username}
          required="required"
          onChange={onChange}
          error={errors.username} />

        <PasswordInput
          name="password"
          placeholder="Password"
          required="required"
          value={login.password}
          onChange={onChange}
          error={errors.password} />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Signing In...' : 'Login'}
          className="btn btn-primary"
          onClick={onSave} />
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  login: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default LoginForm;
