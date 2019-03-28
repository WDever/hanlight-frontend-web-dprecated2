import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import SignPage from '../pages/sign';
import HomePage from '../pages/home';

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id='app' lang='ko'>
      <Switch>
        <Route path='/sign' component={SignPage} />
        {/* <Route path='/login' component={LoginComponent} /> */}
        {/* <Route path='/test' component={SignUpComponent} /> */}
        <Route exact path='/' component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default AppComponent;
