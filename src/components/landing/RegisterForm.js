import React from 'react';
import TextInput from '../../common/TextInput';

const RegisterForm = ({course, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
      name="title"
      label="Title"
      value={course.title}
      onChange={onChange}
      error={errors.title} />

      <TextInput
      name="category"
      label="Category"
      value={course.category}
      onChange={onChange}
      error={errors.category} />

      <TextInput
      name="length"
      label="Length"
      value={course.length}
      onChange={onChange}
      error={errors.length} />

      <input
      type="submit"
      disabled={saving}
      value={saving ? 'Registering...' : 'Register'}
      className="btn btn-primary"
      onClick={onSave} />
    </form>
  );
};

RegisterForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default RegisterForm;
