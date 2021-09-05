import React from 'react';
const Field = ({ label, name, type, value, onChange, error }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <div className="input__container">
        <input
          id={name}
          name={name}
          type={type}
          className="input input__form"
          defaultValue={value}
          onChange={onChange}
        />
        {error ? <p className="text-danger">{error}</p> : ''}
      </div>
    </React.Fragment>
  );
};
export default Field;
