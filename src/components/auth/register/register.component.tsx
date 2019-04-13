import * as React from 'react';
import styled from 'styled-components';
import SignUpImgSrc from '../../../lib/svg/signUp.svg';
import classNames from 'classnames/bind';
import styles from './register.module.scss';
import { RegisterContainerProps, RegisterMethod } from '../../../container/register';
import { RouteComponentProps } from 'react-router-dom';

const cx = classNames.bind(styles);

interface RegisterComponentState {
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
  background-color: #6c63ff;
  color: white;
  outline: none;
  cursor: pointer;
  letter-spacing: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

class RegisterComponent extends React.Component<
  RegisterContainerProps & RegisterMethod & RouteComponentProps,
  RegisterComponentState
  > {
  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }))
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { register, signKey } = this.props;
    const { id, password } = this.state;
    e.preventDefault();

    console.log(this.props);

    register({ id, password, signKey })
  }

  public render() {
    const { handleChange, handleSubmit } = this;
    const { signKey, register } = this.props;
    return (
      <RegisterWrapper>
        <GreetingDiv>
          <Img src={SignUpImgSrc} alt='' />
          계정 생성
        </GreetingDiv>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <input
              className={cx('sign-up-inputs')}
              type='text'
              placeholder='아이디'
              name='id'
              autoComplete='off'
              onChange={handleChange}
            />
            <input
              className={cx('sign-up-inputs')}
              type='password'
              name='password'
              autoComplete='off'
              placeholder='비밀번호'
              onChange={handleChange}
            />
            <input
              className={cx('sign-up-inputs')}
              name='re-password'
              autoComplete='off'
              placeholder='비밀번호 재입력'
              type='password'
              onChange={handleChange}
            />
          </InputWrapper>
          <Btn>회원가입</Btn>
        </Form>
      </RegisterWrapper>
    );
  }
}

export default RegisterComponent;
