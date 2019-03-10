import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames/bind';

// const cx = classNames.bind();

interface MainComponentProps {}

interface MainComponentState {}

class MainComponent extends React.Component<
  MainComponentProps,
  MainComponentState
  > {
  public render() {
    return <div>test</div>;
  }
}

export default MainComponent;
