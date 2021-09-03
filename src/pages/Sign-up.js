import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import authAPI from '../api/authAPI';

const SignUp = () => {
  const inputs = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      required: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
    },
  ];
  const messages = {
    name: 'Your name is too short',
    password: 'Your password is too short',
  };
  const validators = {
    name: (value) => value.length >= 2,
    password: (value) => value.length >= 8,
  };

  const initialData = {
    name: '',
    username: '',
    email: '',
    password: '',
  };

  const formProps = { initialData, inputs, validators, messages, apiMethod: authAPI.registration };
  return (
    <div className="content">
      <div className="content__banner content__banner--right">
        <span>Already a member? </span>
        <Link to="./">Sign in</Link>
      </div>
      <div className="container container--auth">
        <h1 className="content__title">Sign up to Productivo</h1>
        {/* <Button className="button__google-auth">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512">
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
          </svg>
          <span>Sign up with Google</span>
        </Button> */}
        <div className="content__divider">
          <span>or</span>
        </div>
        <Form {...formProps} />
      </div>
    </div>
  );
};

export default SignUp;
