import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames/bind';
import styles from './home.component.module.scss';

const cx = classNames.bind(styles);

interface HomeComponentProps {}

interface HomeComponentState {}

class HomeComponent extends React.Component<
  HomeComponentProps,
  HomeComponentState
  > {
  public render() {
    return (
      <div className={cx('home-wrapper')}>
        <div className={cx('menu-wrapper')}>
          <div className={cx('transparents')}></div>
          <div className={cx('notice')}></div>
          <div className={cx('notice-banner')}></div>
          <div className={cx('school-meals')}></div>
          <div className={cx('school-meals-list')}></div>
          <div className={cx('class-schedule')}></div>
          <div className={cx('transparents')}></div>
          <div className={cx('transparents')}></div>
          <div className={cx('school-schedule')}></div>
          <div className={cx('school-schedule-list')}></div>
          <div className={cx('test')}></div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
