import * as React from 'react';
import styled from 'styled-components';
import SignUpImgSrc from '../../lib/svg/signUp.svg';
import styles from './signUp.module.scss';
import classNames from 'classnames/bind';
import CheckBoxImg from '../../lib/svg/check.svg';
import { FadeIn } from '../login';

const cx = classNames.bind(styles);

interface SignUpComponentProps {}

interface SignUpComponentState {
  check: boolean;
}

const SignUpWrapper = styled.div`
  width: 70%;
  margin-top: 1rem;
  height: 95%;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  left: 30%;

  animation: ${FadeIn} 2.5s;
`;

const GreetingDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 2.25rem;
  font-family: 'Roboto';
  /* margin-bottom: 1rem; */
`;

const SignUpImg = styled.img`
  width: 10.93rem;
  height: 10.93rem;
  margin-bottom: 1rem;
`;

const SignUpInputWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70%;
`;

const SignUpBtn = styled.button`
  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: bold;
  width: 28.125rem;
  height: 3.375rem;
  background-color: #6c63ff;
  color: white;
  outline: none;
  cursor: pointer;
  letter-spacing: 0.5rem;
`;

const TermsWrapper = styled.div`
  font-family: 'Roboto';
  width: 28.125rem;
  color: black;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TermCheckBoxEmpty = styled.img`
  width: 1.5626rem;
  height: 1.5625rem;
  background-color: transparent;
  border: solid 1px #6c63ff;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const TermSpan = styled.span`
  color: #6c63ff;
`;

const PasswordsWrapper = styled.div`
  width: 28.125rem;
  height: 3.125rem;
  /* background-color: transparent; */
  background-color: rgba(108, 99, 255, 0.15);

  &:focus {
    background-color: white;
    border: solid 0.8px #6c63ff;
  }
`;

class SignUpComponent extends React.Component<
  SignUpComponentProps,
  SignUpComponentState
  > {
  public state: SignUpComponentState = {
    check: false,
  };

  public handleClick = () => {
    this.setState(state => ({
      check: !state.check,
    }));
  };

  public render() {
    const { check } = this.state;
    const { handleClick } = this;

    return (
      <SignUpWrapper>
        <GreetingDiv>
          <SignUpImg src={SignUpImgSrc} alt='' />
          계정 만들기
        </GreetingDiv>
        <SignUpForm>
          <SignUpInputWrapper>
            <input
              className={cx('sign-up-inputs')}
              type='text'
              placeholder='이름'
              name='name'
            />
            <input
              className={cx('sign-up-inputs')}
              type='id'
              placeholder='아이디'
              name='id'
            />
            {/* <PasswordsWrapper> */}
            <input
              className={cx('sign-up-inputs')}
              type='password'
              placeholder='비밀번호'
              name='password'
            />
            {/* </PasswordsWrapper> */}
            {/* <PasswordsWrapper> */}
            <input
              className={cx('sign-up-inputs')}
              type='password'
              placeholder='비밀번호 재입력'
              name='passwordConfirm'
            />
            {/* </PasswordsWrapper> */}
            <input
              className={cx('sign-up-inputs')}
              type='pin'
              placeholder='제공된 핀 번호를 입력해주세요'
              name='pin'
            />
          </SignUpInputWrapper>
          <TermsWrapper>
            <TermCheckBoxEmpty
              src={check ? CheckBoxImg : ''}
              alt=''
              onClick={handleClick}
            />
            <TermSpan>약관</TermSpan>에 동의합니다
          </TermsWrapper>
          <SignUpBtn>회원가입</SignUpBtn>
        </SignUpForm>
      </SignUpWrapper>
    );
  }
}

export default SignUpComponent;
