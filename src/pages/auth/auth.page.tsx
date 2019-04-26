import * as React from 'react';
import { Route } from 'react-router-dom';
import AuthComponent from '../../components/auth';
import RegisterComponent from '../../components/auth/register';

const AuthPage: React.SFC<{}> = () => (
    /* eslint-disable */
    <>
      <AuthComponent />
    </>
    /* eslint-enable */
);

export default AuthPage;
