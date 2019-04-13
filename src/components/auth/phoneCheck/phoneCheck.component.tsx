import * as React from 'react';
import styled from 'styled-components';
import SignUpImgSrc from '../../../lib/svg/signUp.svg';
import styles from './phoneCheck.module.scss';
import classNames from 'classnames/bind';
import { FadeIn } from '../login';
import {
  PhoneCheckContainerProps,
  PhoneCheckMethod,
} from '../../../container/phoneCheck';
import { RouteComponentProps, Route, Link } from 'react-router-dom';
import { PhoneCheckResType } from '../../../store';
import AccoutKit from 'react-facebook-account-kit';
import RegisterComponent from '../register';

const cx = classNames.bind(styles);

interface PhoneCheckComponentState {
  check: boolean;
  signKey: string;
  phone: string;
}

const PhoneCheckWrapper = styled.div`
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

const NextBtn = styled.button`
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

const TermsBtnWrapper = styled.div`
  font-family: 'NanumSquare';
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
  font-family: 'NanumSquare';
`;

const TermSpan = styled.span`
  color: #6c63ff;
`;

class PhoneCheckComponent extends React.Component<
  PhoneCheckContainerProps & PhoneCheckMethod & RouteComponentProps,
  PhoneCheckComponentState
  > {
  public state: PhoneCheckComponentState = {
    check: false,
    signKey: '',
    phone: '',
  };

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    this.setState(state => ({
      ...state,
      [name]: value,
    }));

    console.log(this.state.signKey);
    console.log(this.state.phone);
  };

  public handleClick = () => {
    this.setState(state => ({
      check: !state.check,
    }));
  };

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { getState } = this.props;
    const { signKey, phone } = this.state;

    e.preventDefault();

    console.log(signKey, phone);

    // getState({ pin: pin, test: 'test' });
    getState(signKey);
  };

  public handleResponse = async (res: PhoneCheckResType) => {
    const { getCode } = this.props;

    console.log(res);
    await getCode(res);

    await this.verifyPhone();
  };

  public verifyPhone = async () => {
    const { state, code, verifyPhone } = this.props;
    const { signKey } = this.state;

    // await verifyPhone({ state, code, signKey });
    // await console.log(verifyStatus);
    await verifyPhone({ state, code, signKey });

    await this.afterPhoneCheck();
  };

  public afterPhoneCheck = () => {
    const { history, verifyStatus } = this.props;

    console.log(verifyStatus);

    if (verifyStatus === 'success') {
      console.log(verifyStatus);
      history.push('/auth/register');
    } else if (verifyStatus === 'failure') {
      console.log(verifyStatus);
      alert('실패!');
      history.push('/auth/register'); // for test
    }
  };

  public componentDidUpdate = (prevProps: PhoneCheckContainerProps & PhoneCheckMethod) => {
    const { verifyStatus } = this.props;
    if (verifyStatus !== prevProps.verifyStatus) {
      this.afterPhoneCheck();
    }
  }
  

  public render() {
    const { phone } = this.state;
    const { handleChange, handleSubmit, handleResponse } = this;

    return (
      <PhoneCheckWrapper>
        <GreetingDiv>
          <Img src={SignUpImgSrc} alt='' />
          회원 가입
        </GreetingDiv>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <input
              className={cx('sign-up-inputs')}
              type='text'
              placeholder='제공된 핀 번호를 입력해주세요'
              name='signKey'
              autoComplete='off'
              onChange={handleChange}
            />
            <input
              type='tel'
              className={cx('sign-up-inputs')}
              name='phone'
              autoComplete='off'
              placeholder='휴대폰 번호를 - 빼고 입력해주세요.'
              onChange={handleChange}
            />
          </InputWrapper>
          <TermsBtnWrapper>
            <TermsWrapper>
              회원가입 시 <TermSpan>&nbsp;이용약관</TermSpan> 과
              <TermSpan>&nbsp;개인정보 이용 약관</TermSpan>에 동의하게 됩니다.
            </TermsWrapper>
            <AccoutKit
              appId='642150319596855'
              csrf={'457c944d50d2b25cf70ac591c81e3103'}
              debug
              version='v1.0'
              phoneNumber={phone}
              onResponse={handleResponse}
              language='ko_KR'
            >
              {(p: Function) => {
                return <NextBtn {...p}>다음</NextBtn>;
              }}
            </AccoutKit>
          </TermsBtnWrapper>
        </Form>
      </PhoneCheckWrapper>
    );
  }
}

export default PhoneCheckComponent;
