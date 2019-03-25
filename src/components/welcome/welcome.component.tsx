import * as React from 'react';
import styled from 'styled-components';
import WelcomeBackgroundImg from '../../lib/png/group-5.png';
import styles from './welcome.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface WelcomeComponentProps {
  whichPage: boolean;
  handleClick(): void;
}

interface WelcomeComponentState {}

const WelcomeWrapper = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-around; */
`;

const WelcomeImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const GreetingWrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Greeting = styled.div`
  z-index: 1;
  width: auto;
  height: auto;
  color: white;
  font-family: 'Roboto';
  font-size: 4rem;
`;

const Hansei = styled.b`
  /* color: white;
  font-family: 'Roboto';
  font-size: 4rem; */
  font-weight: bold;
  color: #ffde32;
`;

const ChangeBtn = styled.button`
  z-index: 1;
  width: 14.75rem;
  height: 3.375rem;
  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 4.8px;
  outline: none;
  border: none;
  background-color: #ffde32;
  cursor: pointer;
`;

class WelcomeComponent extends React.Component<
  WelcomeComponentProps,
  WelcomeComponentState
  > {
  public render() {
    const { whichPage, handleClick } = this.props;

    return (
      <div
        className={cx(
          'welcome-wrapper',
          whichPage ? 'login-page' : 'sign-up-page',
        )}
      >
        <WelcomeImg src={WelcomeBackgroundImg} alt='' />
        <GreetingWrapper>
          <Greeting>
            {whichPage ? '처음이야?' : '오랜만!'}
            <br />
            <Hansei>한세</Hansei>친구들
          </Greeting>
          <ChangeBtn onClick={handleClick}>
            {whichPage ? '회원가입' : '로그인'}
          </ChangeBtn>
        </GreetingWrapper>
      </div>
    );
  }
}

export default WelcomeComponent;
