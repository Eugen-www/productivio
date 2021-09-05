import React from 'react';
import classNames from 'classnames';

const Button = ({ children, disabled = false, className }) => {
  return (
    <button disabled={disabled} className={classNames('button', className)}>
      {children}
    </button>
  );
};

export default Button;
