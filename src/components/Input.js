import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Input = ({ type, className, name, long, short }) => {
  let input;

  switch (type) {
    case 'password':
      input = (
        <React.Fragment>
          <div className="password__header">
            <label htmlFor={name}>Password</label>
            <Link to="/reset-password">Forgot password?</Link>
          </div>
          <input
            type={type}
            id={`${name}-input`}
            className={classNames('input', className, {
              'input--long': long,
              'input--short': short,
            })}
            autoComplete="false"
            name={name}></input>
        </React.Fragment>
      );
      break;
    default:
      input = (
        <React.Fragment>
          <label htmlFor={name}>Username or Email Address</label>
          <input
            type={type}
            id={`${name}-input`}
            className={classNames('input', className, {
              'input--long': long,
              'input--short': short,
            })}
            autoComplete="false"
            name={name}></input>
        </React.Fragment>
      );
      break;
  }
  return input;
};

export default Input;
