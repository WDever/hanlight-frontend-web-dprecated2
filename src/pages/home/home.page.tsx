import * as React from 'react';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import styles from './home.module.scss';
import HeaderComponent from '../../components/header';
import ChatBot from '../../components/chatbot';
import NoticeBannerComponent from '../../components/noticeBanner';
import SchoolMealListComponent from '../../components/schoolMealList';
import SchoolScheduleComponent from '../../components/schoolSchedule';
import notice from '../../lib/svg/notice.svg';
import schoolMeals from '../../lib/svg/school-meals.svg';
import classSchedule from '../../lib/svg/schedule.svg';
import schoolSchedule from '../../lib/svg/school-schedule.svg';
import TimelinePage from './timeline';
import BackgroundImg from '../../lib/png/background.png';
import SideBarComponent from '../../components/sideBar';

const cx = classNames.bind(styles);

const Background = styled.img`
  height: 100%;
  width: 100%;
  z-index: 0;
  position: absolute;
`;

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const HomePage: React.SFC<{}> = () => (
    /* eslint-disable */
    <>
      <MainWrapper>
        <SideBarComponent />
        <HeaderComponent />
      </MainWrapper>
      <TimelinePage />
      <ChatBot />
    </>
    /* eslint-enable */
);

export default HomePage;
