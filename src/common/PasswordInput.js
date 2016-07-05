import React, {PropTypes} from 'react';

const PasswordInput = ({name, label, onChange, onBlur, placeholder, value, size, error}) => {
  let wrapperClass = 'form-group form-inline';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type="password"
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        size={size}
        onBlur={onBlur}
        onChange={onChange} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.number,
  error: PropTypes.string,
};

export default PasswordInput;
