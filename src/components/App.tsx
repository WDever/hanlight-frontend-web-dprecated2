import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import WelcomeComponent from "./welocome";

const AppComponent: React.SFC<{}> = () => {
  return (
    <div id="app" lang="ko" style={{ minHeight: '100vh' }}>
      <Switch>
        <Route path="/welcome" component={WelcomeComponent} />

        <Redirect to="welcome" />
      </Switch>
      {/* <WelcomeComponent /> */}
      {/* test */}
      {/* <AutoSignPage /> */}
    </div>
  );
};

export default AppComponent;
