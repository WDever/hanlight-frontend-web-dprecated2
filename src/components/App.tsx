import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
// import PostFormTest from './postForm';
import RegisterContainer from '../container/register';

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id='app' lang='ko'>
      <Switch>
        <Route path='/auth/register' component={RegisterContainer} />
        <Route path='/auth' component={AuthPage} />
        <Route path='/' component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default AppComponent;
