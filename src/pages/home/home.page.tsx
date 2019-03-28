import * as React from 'react';
import classNames from 'classnames/bind';
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

const cx = classNames.bind(styles);

const HomePage: React.SFC<{}> = () => {
  return (
    <>
      <div className={cx('home-wrapper')}>
        <HeaderComponent />
        <div className={cx('menu-template')}>
          <div className={cx('menu-wrapper')}>
            <div className={cx('transparents')} />
            <div className={cx('notice', 'btns')}>
              <img src={notice} alt='' className={cx('icons')} />
              공지사항
            </div>
            {/* <div className={cx('notice-banner')} /> */}
            <NoticeBannerComponent />
            <div className={cx('school-meals', 'btns')}>
              <img src={schoolMeals} alt='' className={cx('icons')} />
              급식
            </div>
            {/* <div className={cx('school-meals-list')} /> */}
            <SchoolMealListComponent />
            <div className={cx('class-schedule', 'btns')}>
              <img src={classSchedule} alt='' className={cx('icons')} />
              시간표
            </div>
            <div className={cx('transparents')} />
            <div className={cx('transparents')} />
            <div className={cx('school-schedule', 'btns')}>
              <img src={schoolSchedule} alt='' className={cx('icons')} />
              학사일정
            </div>
            {/* <div className={cx('school-schedule-list')} /> */}
            <SchoolScheduleComponent />
            <div className={cx('test', 'btns')} />
          </div>
        </div>
      </div>
      <ChatBot />
    </>
  );
};

export default HomePage;
