import React from 'react';
import { Route } from 'react-router-dom';

import { SignIn, SignUp, ResetPassword } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Route path="/" component={SignIn} exact />
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/reset-password" component={ResetPassword} exact />
    </div>
  );
}

export default App;
