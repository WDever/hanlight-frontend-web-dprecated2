import * as React from 'react';
import styled from 'styled-components';
import LoginComponent from './login';
import PhoneCheckComponent from './phoneCheck';
import PhoneCheckContainer from '../../container/phoneCheck';
import Welcome from './welcome';
import { Route } from 'react-router-dom';
import RegisterComponent from './register';
import LoginContainer from '../../container/login';

interface SignComponentProps {}

interface SignComponentState {
  whichPage: boolean;
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class SignComponent extends React.Component<
  SignComponentProps,
  SignComponentState
  > {
  public state: SignComponentState = {
    whichPage: true,
  };

  public handleClick = () => {
    this.setState(state => ({
      whichPage: !state.whichPage,
    }));
  };

  public render() {
    const { whichPage } = this.state;
    const { handleClick } = this;

    if (whichPage === true) {
      return (
        <PageWrapper>
          {/* <LoginComponent /> */}
          <LoginContainer />
          <Welcome whichPage={whichPage} handleClick={handleClick} />
          {/* <Route exact path='auth/register' component={RegisterComponent} /> */}
        </PageWrapper>
      );
    } else {
      return (
        <PageWrapper>
          <PhoneCheckContainer />
          <Welcome whichPage={whichPage} handleClick={handleClick} />
          {/* <Route exact path='auth/register' component={RegisterComponent} /> */}
        </PageWrapper>
      );
    }
  }
}

export default SignComponent;
