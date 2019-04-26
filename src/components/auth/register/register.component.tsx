import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames/bind';
import { RouteComponentProps } from 'react-router-dom';
import SignUpImgSrc from '../../../lib/svg/signUp.svg';
import styles from './register.module.scss';
import { RegisterProps, RegisterMethod } from '../../../container/register';
import { StyledComponentsProps } from '../phoneCheck';

const cx = classNames.bind(styles);

interface RegisterState {
  id: string;
  password: string;
  rePassword: string;
}

const RegisterWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  height: 95%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
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
  font-family: 'NanumSquare';
  margin-bottom: 2rem;
  /* margin-bottom: 1rem; */
`;

const Img = styled.img`
  width: 7rem;
  height: 9rem;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 65%;
`;

const Btn = styled.button`
  font-family: 'NanumSquare';
  font-size: 1.5rem;
  font-weight: bold;
  width: 28.125rem;
  height: 3.375rem;
  background-color: ${(props: StyledComponentsProps) => (props.active ? '#6c63ff' : 'rgba(108, 99, 255, 0.25)')};
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

class RegisterComponent extends React.Component<
  RegisterProps & RegisterMethod & RouteComponentProps,
  RegisterState
  > {
  public state: RegisterState = {
    id: '',
    password: '',
    rePassword: '',
  };

  public componentDidUpdate(prevProps: RegisterProps) {
    const { registerStatus, history } = this.props;

    if (registerStatus !== prevProps.registerStatus) {
      if (registerStatus === 'success') {
        console.log('성공');
        history.push('/auth');
      } else if (registerStatus === 'failure') {
        alert('실패');
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

  public submitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    const { register, signKey } = this.props;
    const { id, password } = this.state;
    e.preventDefault();

    console.log(this.props);

    register({ id, password, signKey });
  };

  // public afterSubmit = () => {
  //   const { registerStatus, history } = this.props;

  //   if (registerStatus === 'success') {
  //     console.log('성공');
  //     history.push('/auth');
  //   } else if (registerStatus === 'failure') {
  //     alert('실패');
  //   }
  // };

  public render() {
    const { handleChange, submitRegister } = this;
    const { id, password, rePassword } = this.state;

    return (
      <RegisterWrapper>
        <GreetingDiv>
          <Img src={SignUpImgSrc} alt="" />
          계정 생성
        </GreetingDiv>
        <Form onSubmit={submitRegister}>
          <InputWrapper>
            <input
              className={cx('sign-up-inputs')}
              type="text"
              placeholder="아이디"
              name="id"
              autoComplete="off"
              onChange={handleChange}
            />
            <input
              className={cx('sign-up-inputs')}
              type="password"
              name="password"
              autoComplete="off"
              placeholder="비밀번호"
              onChange={handleChange}
            />
            <input
              className={cx('sign-up-inputs')}
              name="rePassword"
              autoComplete="off"
              placeholder="비밀번호 재입력"
              type="password"
              onChange={handleChange}
            />
          </InputWrapper>
          <Btn active={!!(id && password && rePassword)}>회원가입</Btn>
        </Form>
      </RegisterWrapper>
    );
  }
}

export default RegisterComponent;
