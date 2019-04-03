import * as React from 'react';
import styled from 'styled-components';
import SignUpImgSrc from '../../lib/svg/signUp.svg';

interface SignComponentProps {}

interface SignComponentState {}

const SignWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  height: 95%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
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
`;

const SignUpImg = styled.img`
  width: 7rem;
  height: 9rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Inputs = styled.input`
  color: #6c63ff;
  font-family: 'Roboto';
  font-size: 1rem;
  text-indent: 1.5rem;
  width: 28.125rem;
  height: 3.125rem;
  background-color: rgba(108, 99, 255, 0.15);

  outline: none;
  border: none;

  &::placeholder {
    color: #6c63ff;
    text-indent: 1.5rem;
  }

  &:focus {
    background-color: white;
    border: solid 0.8px #6c63ff;
  }
`;

const SignBtn = styled.button`
  color: white;
  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 4.8px;
  width: 28.125rem;
  height: 3.375rem;
  background-color: #6c63ff;
  outline: none;
  border: 0;
`;

class SignComponent extends React.Component<SignComponentProps, SignComponentState> {
  public render() {
    return (
      <SignWrapper>
        <GreetingDiv>
          <SignUpImg src={SignUpImgSrc} alt='' />
          회원가입
        </GreetingDiv>
        <Form>
          <InputWrapper>
            <Inputs type='id' placeholder='아이디' />
            <Inputs type='password' placeholder='비밀번호' />
            <Inputs type='password' placeholder='비밀번호 재입력' />
          </InputWrapper>
          <SignBtn>
            회원가입
          </SignBtn>
        </Form>
      </SignWrapper>
    );
  }
}

export default SignComponent;
