import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import SignComponent from '../pages/sign';
import LoginComponent from './login';
import HomeComponent from './home';

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id='app' lang='ko'>
      <Switch>
        <Route path='/sign' component={SignComponent} />
        <Route path='/login' component={LoginComponent} />
        <Route exact path='/' component={HomeComponent} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default AppComponent;
