import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames/bind';
import { LoginProps, LoginMethod } from '../../../container/login';
import styles from './login.component.module.scss';
import LoginImgSrc from '../../../lib/svg/login.svg';
import { StyledComponentsProps } from '../phoneCheck';

const cx = classNames.bind(styles);

interface LoginState {
  id: string;
  password: string;
}

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
  background-color: ${(props: StyledComponentsProps) => (props.active ? '#6c63ff' : 'rgba(108, 99, 255, 0.25)')};
  color: white;
  outline: none;
  border: none;
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
  LoginProps & LoginMethod & RouteComponentProps,
  LoginState
  > {
  public state: LoginState = {
    id: '',
    password: '',
  };

  public componentDidUpdate(prevProps: LoginProps) {
    const { loginStatus, history } = this.props;
    if (loginStatus !== prevProps.loginStatus) {
      // after try to login
      if (loginStatus === 'success') {
        history.push('/');
      } else if (loginStatus === 'failure') {
        alert('로그인 실패');
      }
    }
  }

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(state => ({
      ...state,
      [name]: value,
    }));
  };

  public submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    const { login } = this.props;
    const { id, password } = this.state;
    e.preventDefault();

    console.log(this.props);
    console.log(this.state);

    login({ id, password });
  };

  // public afterLogin = () => {
  //   const { history, loginStatus } = this.props;

  //   console.log(loginStatus);

  //   if (loginStatus === 'success') {
  //     console.log(loginStatus);
  //     history.push('/');
  //   } else if (loginStatus === 'failure') {
  //     console.log(loginStatus);
  //     alert('로그인 실패');
  //     history.push('/');
  //   }
  //   console.log(loginStatus);
  // };

  public render() {
    const { submitLogin, handleChange } = this;
    const { id, password } = this.state;

    return (
      <LoginWrapper>
        <GreetingDiv>
          <LoginImg src={LoginImgSrc} alt="" />
          한빛에 오신 것을 환영합니다
        </GreetingDiv>
        <LoginForm onSubmit={submitLogin}>
          <LoginInputWrapper>
            <input
              className={cx('login-inputs')}
              type="id"
              placeholder="아이디"
              onChange={handleChange}
              name="id"
              value={id}
            />
            <input
              className={cx('login-inputs')}
              type="password"
              placeholder="비밀번호"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </LoginInputWrapper>
          <LoginBtn active={!!(id && password)}>로그인</LoginBtn>
          <FindBtnsWrapper>
            <FindBtns>아이디 찾기</FindBtns>
|
            <FindBtns>비밀번호 찾기</FindBtns>
          </FindBtnsWrapper>
        </LoginForm>
      </LoginWrapper>
    );
  }
}

export default LoginComponent;
