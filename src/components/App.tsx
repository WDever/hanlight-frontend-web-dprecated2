import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import WelcomeComponent from './welcome';
import LoginComponent from './login';
import HomeComponent from './home';

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id='app' lang='ko'>
      <Switch>
        <Route path='/welcome' component={WelcomeComponent} />
        <Route path='/login' component={LoginComponent} />
        <Route path='/home' component={HomeComponent} />
        <Redirect to='welcome' />
      </Switch>
    </div>
  );
};

export default AppComponent;
