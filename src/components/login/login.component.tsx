import * as React from 'react';
import styled from 'styled-components';
import welcomePic from './welcomePic.png';
import styles from './login.component.module.scss';

const WelcomeWrapperDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GreetingDiv = styled.div`
  z-index: 1;
  height: 60%;
  width: 70%;
  font-size: 4rem;
`;

const HanseiB = styled.b`
  color: #6c63ff;
  font-weight: normal;
`;

const HelloP = styled.p`
  font-weight: 900;
  margin: 0;
`;

const WelcomeImgWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const WelcomeImg = styled.img`
  width: 55%;
  height: 70%;
`;

const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const LoginBtn = styled.button`
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  width: 11.56rem;
  height: 3rem;
  background: #0047ff;
  box-shadow: 0px 4px 12px rgba(0, 71, 255, 0.4);
  border-radius: 48px;
  cursor: pointer;
`;

interface LoginComponentProps {}

interface LoginComponentState {}

class LoginComponent extends React.Component<
  LoginComponentProps,
  LoginComponentState
  > {
  public render() {
    return (
      <WelcomeWrapperDiv>
        <GreetingDiv>
          <HelloP>어서와,</HelloP>
          <HanseiB>한세</HanseiB>친구들
          <LoginInputWrapper>
            아이디
            <input className={styles.loginInput} />
            비밀번호
            <input className={styles.loginInput} type='password' />
          </LoginInputWrapper>
          <LoginBtn>로그인</LoginBtn>
        </GreetingDiv>
        <WelcomeImgWrapper>
          <WelcomeImg src={welcomePic} />
        </WelcomeImgWrapper>
      </WelcomeWrapperDiv>
    );
  }
}

export default LoginComponent;
