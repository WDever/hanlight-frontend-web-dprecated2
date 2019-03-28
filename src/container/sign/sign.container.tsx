import * as React from 'react';
import styled from 'styled-components';
import LoginComponent from '../../components/login';
import SignUpComponent from '../../components/signUp';
import Welcome from '../../components/welcome';

interface SignContainerProps {}

interface SignContainerState {
  whichPage: boolean;
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class SignContainer extends React.Component<
  SignContainerProps,
  SignContainerState
  > {
  public state: SignContainerState = {
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

export default SignContainer;
