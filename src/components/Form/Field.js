import React from 'react';

const Field = ({ label, name, type, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} defaultValue={value} onChange={onChange} />
      <p className="text-danger">{error}</p>
    </div>
  );
};
export default Field;
