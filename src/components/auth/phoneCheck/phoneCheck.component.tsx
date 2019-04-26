import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames/bind';
import { RouteComponentProps } from 'react-router-dom';
import AccoutKit from 'react-facebook-account-kit';
import SignUpImgSrc from '../../../lib/svg/signUp.svg';
import styles from './phoneCheck.module.scss';
import { FadeIn } from '../login';
import {
  PhoneCheckProps,
  PhoneCheckMethod,
} from '../../../container/phoneCheck';
import { PhoneCheckResType } from '../../../store';

const cx = classNames.bind(styles);

interface PhoneCheckState {
  check: boolean;
  signKey: string;
  phone: string;
  code: string;
  getCodeStatus:
  | 'none'
  | 'PARTIALLY_AUTHENTICATED'
  | 'NOT_AUTHENTICATED'
  | 'BAD_PARAMS';
}

export interface StyledComponentsProps {
  active: boolean;
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
  /* background-color: #6c63ff;
  background-color: rgba(108, 99, 255, 0.25); */
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
  PhoneCheckProps & PhoneCheckMethod & RouteComponentProps,
  PhoneCheckState
  > {
  public state: PhoneCheckState = {
    check: false,
    signKey: '',
    phone: '',
    code: '',
    getCodeStatus: 'none',
  };

  public componentDidUpdate(prevProps: PhoneCheckProps & PhoneCheckMethod) {
    const { verifyStatus, history } = this.props;

    if (verifyStatus !== prevProps.verifyStatus) {
      if (verifyStatus === 'success') {
        console.log(verifyStatus);
        history.push('/auth/register');
      } else if (verifyStatus === 'failure') {
        console.log(verifyStatus);
        alert('실패!');
      }
    }
  }

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    this.setState(state => ({
      ...state,
      [name]: value,
    }));
  };

  public preventDefualt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  public test = () => {
    const { getState } = this.props;
    const { signKey } = this.state;

    getState(signKey);
  };

  public handleResponse = async (res: PhoneCheckResType) => {
    await this.setState(
      () => ({
        code: res.code,
        getCodeStatus: res.status,
      }),
      () => this.verifyPhone(),
    );

    console.log(res);
  };

  public verifyPhone = () => {
    const { state, verifyPhone } = this.props;
    const { signKey, code, getCodeStatus } = this.state;

    console.log(getCodeStatus);
    // await verifyPhone({ state, code, signKey });
    // await console.log(verifyStatus);
    if (getCodeStatus === 'PARTIALLY_AUTHENTICATED') {
      console.log(state);
      console.log(code);
      console.log(signKey);
      verifyPhone({ code, state, signKey });
    } else {
      alert('핸드폰 인증 실패');
    }
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
    }
  };

  public render() {
    const { phone, signKey } = this.state;
    const {
      handleChange, preventDefualt, handleResponse, test,
    } = this;
    const { state, getStateStatus } = this.props;

    return (
      <PhoneCheckWrapper>
        <GreetingDiv>
          <Img src={SignUpImgSrc} alt="" />
          회원 가입
        </GreetingDiv>
        <Form onSubmit={preventDefualt}>
          <InputWrapper>
            <input
              className={cx('sign-up-inputs')}
              type="text"
              placeholder="제공된 핀 번호를 입력해주세요"
              name="signKey"
              autoComplete="off"
              onChange={handleChange}
              onBlur={test}
            />
            <input
              type="tel"
              className={cx('sign-up-inputs')}
              name="phone"
              autoComplete="off"
              placeholder="휴대폰 번호를 - 빼고 입력해주세요."
              onChange={handleChange}
            />
          </InputWrapper>
          <TermsBtnWrapper>
            <TermsWrapper>
              회원가입 시
              {' '}
              <TermSpan>&nbsp;이용약관</TermSpan>
              {' '}
과
              <TermSpan>&nbsp;개인정보 이용 약관</TermSpan>
에 동의하게 됩니다.
            </TermsWrapper>
            {getStateStatus === 'success' && !!phone ? (
              <AccoutKit
                appId="265056484381541"
                csrf={state}
                debug
                version="v1.1"
                phoneNumber={phone}
                onResponse={handleResponse}
                language="ko_KR"
              >
                {(p: Function) => (
                  <NextBtn active {...p}>
                    다음
                  </NextBtn>
                )}
              </AccoutKit>
            ) : (
              <NextBtn
                active={!!(phone && signKey)}
                style={
                  getStateStatus === 'failure' ? { letterSpacing: '0' } : {}
                }
              >
                {getStateStatus === 'failure'
                  ? '존재하지 않는 PIN 번호 입니다.'
                  : '다음'}
              </NextBtn>
            )}
          </TermsBtnWrapper>
        </Form>
      </PhoneCheckWrapper>
    );
  }
}

export default PhoneCheckComponent;
