import * as React from 'react';
import styled from 'styled-components';
import Background from '../../lib/svg/SignBackground';
import test from '../../lib/svg/sign-background.svg';
import { Link } from 'react-router-dom';
import styles from './sign.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const WelcomeWrapperDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  width: 100%;
  height: 100%;
`;

const WelcomeImg = styled.img`
  position: fixed;
  top: 370px;
  left: -50px;
  width: 60%;
  height: 60%;
`;

const BtnWrapper = styled.div`
  z-index: 1;
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  width: 35%;
  height: 5rem;
`;

class WelcomeComponent extends React.Component {
  public render() {
    return (
      <WelcomeWrapperDiv>
        <GreetingDiv>
          <HelloP>안녕,</HelloP>
          <HanseiB>한세</HanseiB> 친구들
          <BtnWrapper>
            <Link to='/login' className={cx('Btns', 'Login')}>
              로그인
            </Link>
            <Link to='/register' className={cx('Btns', 'Register')}>
              회원가입
            </Link>
          </BtnWrapper>
        </GreetingDiv>
        {/* <WelcomeImgWrapper>
          <WelcomeImg src={test} />
        </WelcomeImgWrapper> */}
        <WelcomeImg src={test} />
      </WelcomeWrapperDiv>
    );
  }
}

export default WelcomeComponent;
