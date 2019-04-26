import * as React from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  width: 10rem;
  height: 100%;
`;

class SideBarComponent extends React.Component {
  public render() {
    return (
      <SideBarWrapper>
        공지사항
        급식
        시간표
        학사일정
      </SideBarWrapper>
    );
  }
}

export default SideBarComponent;
