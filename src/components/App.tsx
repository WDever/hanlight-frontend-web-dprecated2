import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import AuthComponent from '../components/auth';
import HomePage from '../pages/home';
import PostFormTest from './postForm';
import SignComponent from './sign';

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id='app' lang='ko'>
      <Switch>
        <Route path='/auth' component={AuthComponent} />
        {/* <Route path='/login' component={LoginComponent} /> */}
        <Route path='/sign' component={SignComponent} />
        <Route exact path='/' component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default AppComponent;
