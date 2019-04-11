import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames/bind';
import styles from './login.component.module.scss';
import LoginImgSrc from '../../../lib/svg/login.svg';

const cx = classNames.bind(styles);

interface LoginComponentProps {
}

interface LoginComponentState {}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoginWrapper = styled.div`
  width: 70%;
  height: 90%;
  display: inline-flex;
  flex-direction: column;
  margin: 4rem 0 0 0;

  animation: ${FadeIn} 2.5s;
`;

const GreetingDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 2.25rem;
  font-family: 'NanumSquare';
  font-weight: bold;
  margin-bottom: 2rem;
`;

const LoginImg = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  margin-bottom: 1rem;
`;

const LoginInputWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const LoginBtn = styled.button`
  font-family: 'NanumSquare';
  font-size: 1.5rem;
  font-weight: 800;
  width: 28.125rem;
  height: 3.375rem;
  background-color: #6c63ff;
  color: white;
  outline: none;
  cursor: pointer;
  letter-spacing: 0.5rem;
`;

const FindBtnsWrapper = styled.div`
  font-family: 'NanumSquare';
  width: 28.125rem;
  color: #6c63ff;
  font-size: 1.25rem;
  display: flex;
  justify-content: flex-end;
`;

const FindBtns = styled.button`
  font-family: 'NanumSquare';
  font-size: 1.25rem;
  color: #6c63ff;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

class LoginComponent extends React.Component<
  LoginComponentProps,
  LoginComponentState
  > {
  public render() {
    return (
      <LoginWrapper>
        {/* // <div className={cx('login-wrapper')}> */}
        <GreetingDiv>
          <LoginImg src={LoginImgSrc} alt='' />
          한빛에 오신 것을 환영합니다
        </GreetingDiv>
        <LoginForm>
          <LoginInputWrapper>
            <input
              className={cx('login-inputs')}
              type='id'
              placeholder='아이디'
            />
            <input
              className={cx('login-inputs')}
              type='password'
              placeholder='비밀번호'
            />
          </LoginInputWrapper>
          <LoginBtn>로그인</LoginBtn>
          <FindBtnsWrapper>
            <FindBtns>아이디 찾기</FindBtns>|<FindBtns>비밀번호 찾기</FindBtns>
          </FindBtnsWrapper>
        </LoginForm>
        {/* // </div> */}
      </LoginWrapper>
    );
  }
}

export default LoginComponent;
