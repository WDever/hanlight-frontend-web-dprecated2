import * as React from 'react';
import styled from 'styled-components';
import welcomePic from './welcomePic.png';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './welcome.component.module.scss';

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
  height: 60%;
  width: 70%;
  font-size: 4rem;
`;

const HanseiB = styled.b`
  color: #6c63ff;
  font-weight: normal;
`;

const HelloP = styled.p`
  font-weight: 900;
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
  width: 55%;
  height: 70%;
`;

const BtnWrapper = styled.div`
  z-index: 1;
  display: flex;
  margin-top: 2rem;
  justify-content: space-around;
  width: 40%;
  height: 5rem;
`;

class WelcomeComponent extends React.Component {
  public loginClick = () => {
    console.log('Login');
  };

  public registerClick = () => {
    console.log('Register');
  };

  public render() {
    const { loginClick, registerClick } = this;
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
        <WelcomeImgWrapper>
          <WelcomeImg src={welcomePic} />
        </WelcomeImgWrapper>
      </WelcomeWrapperDiv>
    );
  }
}

export default WelcomeComponent;
