import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import SignComponent from './sign';
import LoginComponent from './login';
import HomeComponent from './home';
import SignUpComponent from './signUp';

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id='app' lang='ko'>
      <Switch>
        <Route path='/sign' component={SignComponent} />
        <Route path='/login' component={LoginComponent} />
        <Route path='/test' component={SignUpComponent} />
        <Route exact path='/' component={HomeComponent} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default AppComponent;
