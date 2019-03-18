import * as React from 'react';
import styled from 'styled-components';
import welcomePic from '../../lib/svg/sign-background.svg';
import PasswordIcon from '../../lib/svg/padlock.svg';
import IdIcon from '../../lib/svg/name.svg';
import classNames from 'classnames/bind';
import styles from './login.component.module.scss';

const cx = classNames.bind(styles);

const WelcomeWrapperDiv = styled.div`
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
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
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const WelcomeImg = styled.img`
  position: fixed;
  top: 325px;
  left: 700px;
  width: 60%;
  height: 60%;
`;

const LoginInputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 60%;
  margin-top: 2rem;
  font-size: initial;
`;

const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  margin-top: 2rem;
  font-size: initial;
`;

const FindBtns = styled.div`
  display: flex;
  color: #6c63ff;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  width: 30%;
  cursor: pointer;
`;

const LoginBtn = styled.button`
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  width: 30%;
  height: 3rem;
  box-shadow: 0 4px 12px 0 rgba(0, 71, 255, 0.4);
  background-color: #6c63ff;
  border-radius: 48px;
  cursor: pointer;
`;

const LoginInputBorder = styled.div`
  font-size: 2rem;
  background-color: transparent;
  outline: none;
  border: solid 0.8px #6c63ff;
  border-radius: 48px;
  margin-bottom: 2rem;
  width: 45%;
  height: 100%;
  color: #6c63ff;
  display: flex;
  justify-content: flex-end;
`;

const LoginInputs = styled.input`
  color: #6c63ff;
  width: 90%;
  font-size: 2rem;
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
          <HanseiB>한세</HanseiB> 친구들
          <LoginInputForm
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              console.log(e.currentTarget);
            }}
          >
            <LoginInputWrapper>
              <div className={cx('login-input-wrappers')}>
                <img src={IdIcon} className={cx('id-icons')} alt='' />
                <input
                  type='id'
                  // placeholder='아이디'
                  className={cx('login-input')}
                />
              </div>
              <div className={cx('login-input-wrappers')}>
                <img src={PasswordIcon} className={cx('ps-icons')} alt='' />
                <input
                  className={cx('login-input')}
                  type='password'
                  // placeholder='비밀먼호'
                />
              </div>
            </LoginInputWrapper>
            {/* 아이디
            <LoginInputBorder>
              <LoginInputs type='id' placeholder='아이디' />
            </LoginInputBorder>
            비밀번호
            <LoginInputBorder>
              <LoginInputs type='password' placeholder='비밀번호' />
            </LoginInputBorder> */}
            <LoginBtn>로그인</LoginBtn>
            <FindBtns>아이디 찾기 / 비밀번호 찾기</FindBtns>
          </LoginInputForm>
        </GreetingDiv>
        {/* <WelcomeImgWrapper>
          <WelcomeImg src={welcomePic} />
        </WelcomeImgWrapper> */}
        <WelcomeImg src={welcomePic} />
      </WelcomeWrapperDiv>
    );
  }
}

export default LoginComponent;
