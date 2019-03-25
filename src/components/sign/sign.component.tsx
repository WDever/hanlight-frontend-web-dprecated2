import * as React from 'react';
import styled from 'styled-components';
import ChatBot from '../chatbot';
import test from '../../lib/svg/sign-background.svg';
import { Link } from 'react-router-dom';
import LoginComponent from '../login';
import SignUpComponent from '../signUp';
import Welcome from '../welcome';
import styles from './sign.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface SignComponentProps {}

interface SignComponentState {
  whichPage: boolean;
}

const WelcomeWrapperDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GreetingDiv = styled.div`
  z-index: 1;
  height: 75%;
  width: 70%;
  font-size: 4rem;
`;

const HanseiB = styled.b`
  color: #6c63ff;
  font-weight: bold;
`;

const HelloP = styled.p`
  font-weight: 500;
  margin: 0;
`;

const WelcomeImgWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const WelcomeImg = styled.img`
  position: fixed;
  top: 370px;
  left: -50px;
  width: 60%;
  height: 60%;
`;

const BtnWrapper = styled.div`
  z-index: 1;
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  width: 35%;
  height: 5rem;
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* flex-direction: row-reverse; */
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
          <LoginComponent />
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
