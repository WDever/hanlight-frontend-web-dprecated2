import * as React from 'react';
import styled from 'styled-components';
import LoginComponent from './login';
import SignUpComponent from './phoneCheck';
import Welcome from './welcome';

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
          <LoginComponent whichPage={whichPage} />
          <Welcome whichPage={whichPage} handleClick={handleClick} />
        </PageWrapper>
      );
    } else {
      return (
        <PageWrapper>
          <SignUpComponent />
          <Welcome whichPage={whichPage} handleClick={handleClick} />
        </PageWrapper>
      );
    }
  }
}

export default SignComponent;
