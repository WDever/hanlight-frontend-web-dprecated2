import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './home.component.module.scss';
import notice from '../../lib/svg/notice.svg';
import schoolMeals from '../../lib/svg/school-meals.svg';
import classSchedule from '../../lib/svg/schedule.svg';
import schoolSchedule from '../../lib/svg/school-schedule.svg';
import HeaderComponent from '../header';
import ChatBot from '../chatbot';

const cx = classNames.bind(styles);

interface HomeComponentProps {}

interface HomeComponentState {}

class HomeComponent extends React.Component<
  HomeComponentProps,
  HomeComponentState
  > {
  public render() {
    return (
      <>
        <div className={cx('home-wrapper')}>
          <HeaderComponent />
          <div className={cx('menu-template')}>
            <div className={cx('menu-wrapper')}>
              <div className={cx('transparents', 'blocks')} />
              <div className={cx('notice', 'blocks')}>
                <img src={notice} alt='' className={cx('icons')} />
                공지사항
              </div>
              <div className={cx('notice-banner', 'blocks')} />
              <div className={cx('school-meals', 'blocks')}>
                <img src={schoolMeals} alt='' className={cx('icons')} />
                급식
              </div>
              <div className={cx('school-meals-list', 'blocks')} />
              <div className={cx('class-schedule', 'blocks')}>
                <img src={classSchedule} alt='' className={cx('icons')} />
                시간표
              </div>
              <div className={cx('transparents', 'blocks')} />
              <div className={cx('transparents', 'blocks')} />
              <div className={cx('school-schedule', 'blocks')}>
                <img src={schoolSchedule} alt='' className={cx('icons')} />
                학사일정
              </div>
              <div className={cx('school-schedule-list', 'blocks')} />
              <div className={cx('test', 'blocks')} />
            </div>
          </div>
        </div>
        <ChatBot />
      </>
    );
  }
}

export default HomeComponent;
