import * as React from 'react';
import styled from 'styled-components';
import SignUpImgSrc from '../../../lib/svg/signUp.svg';
import styles from './phoneCheck.module.scss';
import classNames from 'classnames/bind';
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
  align-items: center;
  /* justify-content: space-around; */
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
  margin-bottom: 2rem;
  /* margin-bottom: 1rem; */
`;

const SignUpImg = styled.img`
  width: 7rem;
  height: 9rem;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 40%;
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
  height: 60%;
`;

const NextBtn = styled.div`
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const TermsBtnWrapper = styled.div`
  font-family: 'Roboto';
  width: 28.125rem;
  color: black;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TermsWrapper = styled.p`
  font-size: 1rem;
  font-family: 'Roboto';
`;

const TermSpan = styled.span`
  color: #6c63ff;
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
          회원 가입
        </GreetingDiv>
        <Form>
          <InputWrapper>
            <input
              className={cx('sign-up-inputs')}
              type='pin'
              placeholder='제공된 핀 번호를 입력해주세요'
              name='pin'
              autoComplete='off'
            />
            <input
              type='tel'
              className={cx('sign-up-inputs')}
              name='phone'
              autoComplete='off'
              placeholder='휴대폰 번호 (EX. 01039963798)'
            />
          </InputWrapper>
          <TermsBtnWrapper>
            <TermsWrapper>
              회원가입 시 <TermSpan>&nbsp;이용약관</TermSpan> 과
              <TermSpan>&nbsp;개인정보 이용 약관</TermSpan>에 동의하게 됩니다.
            </TermsWrapper>
            <NextBtn>다음</NextBtn>
          </TermsBtnWrapper>
        </Form>
      </SignUpWrapper>
    );
  }
}

export default SignUpComponent;
