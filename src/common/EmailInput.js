import React, {PropTypes} from 'react';

const EmailInput = ({name, label, onChange, onBlur, placeholder, value, size, error}) => {
  let wrapperClass = 'form-group form-inline';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
        <input
          type="email"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          size={size}
          onBlur={onBlur}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.number,
  value: PropTypes.string,
  error: PropTypes.string
};

export default EmailInput;
