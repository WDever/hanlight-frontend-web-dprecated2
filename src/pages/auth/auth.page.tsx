import * as React from 'react';
import AuthComponent from '../../components/auth';
import { Route } from 'react-router-dom';
import RegisterComponent from '../../components/auth/register';

const AuthPage: React.SFC<{}> = () => {
  return (
    <>
      <AuthComponent />
    </>
  );
};

export default AuthPage;
