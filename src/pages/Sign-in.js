import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input';

import authAPI from '../api/authAPI';

const SignIn = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div className="content">
      <div className="content__banner content__banner--right">
        <span>Not a member yet? </span>
        <Link to="./sign-up">Sign up</Link>
      </div>
      <div className="container container--auth">
        <h1 className="content__title">Sign in to Productivo</h1>
        <Button className="button__google-auth">
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
          <span>Sign in with Google</span>
        </Button>
        <div className="content__divider">
          <span>or</span>
        </div>
        <div className="sign-in__form">
          <Input
            type="text"
            className="input__form"
            name="username"
            long
            text={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            type="password"
            className="input__form"
            name="password"
            long
            text={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            className="button__form"
            onClick={() => {
              authAPI.login({ username, password });
            }}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
