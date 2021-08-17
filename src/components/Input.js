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
            id={name}
            className={classNames('input', className, {
              'input--long': long,
              'input--short': short,
            })}
            autoComplete="false"
            name={name}></input>
        </React.Fragment>
      );
      break;
    case 'checkbox':
      input = (
        <div id="checkbox-input">
          <input type={type} id={name} name={name} className="custom-checkbox" />
          <label htmlFor={name}>
            Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our
            default Notification Settings.
          </label>
        </div>
      );
      break;
    default:
      input = (
        <React.Fragment>
          <label htmlFor={name}>{name[0].toUpperCase() + name.substring(1)}</label>
          <input
            type={type}
            id={name}
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
