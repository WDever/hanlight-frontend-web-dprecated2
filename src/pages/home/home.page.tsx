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
// import Test from '../../lib/svg/bg2.svg';

const cx = classNames.bind(styles);

const Background = styled.img`
  height: 100%;
  width: 100%;
  z-index: 0;
  position: absolute;
`;

const HomePage: React.SFC<{}> = () => {
  return (
    <>
      <TimelinePage />
      <ChatBot />
    </>
  );
};

export default HomePage;
