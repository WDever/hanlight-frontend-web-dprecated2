import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import AuthComponent from '../components/auth';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
// import PostFormTest from './postForm';
import RegisterComponent from './auth/register';
import TEst from '../components/sign';

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id='app' lang='ko'>
      <Switch>
        <Route path='/auth/register' component={RegisterComponent} />
        <Route path='/auth' component={AuthPage} />
        <Route path='/test' component={TEst} />
        <Route path='/' component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default AppComponent;
