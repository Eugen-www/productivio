import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '../components/Button';
// import Input from '../components/Input';

const ResetPassword = () => {
  return (
    <div className="content">
      <div className="content__banner">
        <Link className="return__button" to="../">
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.2541 9.95803L22.4879 3.23809C22.8159 2.88243 23 2.4013 23 1.8998C23 1.3983 22.8159 0.917178 22.4879 0.56151C22.3242 0.383587 22.1295 0.242364 21.9149 0.145991C21.7003 0.0496174 21.4701 0 21.2376 0C21.0052 0 20.775 0.0496174 20.5604 0.145991C20.3458 0.242364 20.1511 0.383587 19.9874 0.56151L12.5209 8.61024C12.3558 8.78672 12.2248 8.99667 12.1354 9.22799C12.046 9.45932 12 9.70743 12 9.95803C12 10.2086 12.046 10.4567 12.1354 10.6881C12.2248 10.9194 12.3558 11.1293 12.5209 11.3058L19.9874 19.4495C20.1519 19.6254 20.347 19.7646 20.5616 19.8591C20.7762 19.9535 21.0059 20.0014 21.2376 20C21.4694 20.0014 21.6991 19.9535 21.9137 19.8591C22.1282 19.7646 22.3234 19.6254 22.4879 19.4495C22.8159 19.0938 23 18.6127 23 18.1112C23 17.6097 22.8159 17.1285 22.4879 16.7729L16.2541 9.95803Z"
              fill="#332700"
            />
            <path
              d="M4.64086 9.95803L11.4414 3.23809C11.7992 2.88243 12 2.4013 12 1.8998C12 1.3983 11.7992 0.917178 11.4414 0.56151C11.2628 0.383587 11.0503 0.242364 10.8162 0.145991C10.5821 0.0496174 10.331 0 10.0774 0C9.82383 0 9.57274 0.0496174 9.33864 0.145991C9.10454 0.242364 8.89207 0.383587 8.71349 0.56151L0.568243 8.61024C0.388186 8.78672 0.245271 8.99667 0.147742 9.22799C0.0502133 9.45932 0 9.70743 0 9.95803C0 10.2086 0.0502133 10.4567 0.147742 10.6881C0.245271 10.9194 0.388186 11.1293 0.568243 11.3058L8.71349 19.4495C8.89299 19.6254 9.10587 19.7646 9.33993 19.8591C9.57398 19.9535 9.82461 20.0014 10.0774 20C10.3303 20.0014 10.5809 19.9535 10.8149 19.8591C11.049 19.7646 11.2619 19.6254 11.4414 19.4495C11.7992 19.0938 12 18.6127 12 18.1112C12 17.6097 11.7992 17.1285 11.4414 16.7729L4.64086 9.95803Z"
              fill="#332700"
            />
          </svg>
        </Link>
      </div>
      <div className="container container--auth">
        <h1 className="content__title">Forgot Password?</h1>
        <div className="content__text">
          <p>
            Enter the email address you used when you joined and we???ll send you instructions to
            reset your password.
          </p>
          <p>
            For security reasons, we do NOT store your password. So rest assured that we will never
            send your password via email.
          </p>
        </div>
        {/* <Input type="email" className="input__form" name="email" long />
        <Button className="button__form">Reset email</Button> */}
      </div>
    </div>
  );
};

export default ResetPassword;
