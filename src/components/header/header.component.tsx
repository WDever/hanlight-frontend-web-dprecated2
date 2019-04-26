import * as React from 'react';
import styled from 'styled-components';

interface HeaderComponentProps {}

interface HeaderComponentState {}

const HeaderWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 5%;
  background-color: transparent;
  margin-bottom: 2.5rem;
  margin-top: 0.5rem;
  color: white;
  justify-content: flex-end;

  z-index: 1;
`;

const HeaderInnerWrapper = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;

  font-family: 'NanumSquare';
  color: black;
  font-size: 1.125rem;
`;

const HeaderUser = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeaderEdit = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeaderLogout = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

class HeaderComponent extends React.Component<
  HeaderComponentProps,
  HeaderComponentState
  > {
  public render() {
    return (
      <HeaderWrapper>
        <HeaderInnerWrapper>
          <HeaderUser>User</HeaderUser>
          <HeaderEdit>내 정보 수정</HeaderEdit>
          <HeaderLogout>로그아웃</HeaderLogout>
        </HeaderInnerWrapper>
      </HeaderWrapper>
    );
  }
}

export default HeaderComponent;
