import * as React from 'react';
import styled from 'styled-components';

interface HeaderComponentProps {}

interface HeaderComponentState {}

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  background-color: transparent;
  margin-bottom: 2.5rem;
  color: white;
  justify-content: flex-end;
`;

const HeaderInnerWrapper = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
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
          <HeaderUser>
            User
          </HeaderUser>
          <HeaderEdit>
            내 정보 수정
          </HeaderEdit>
          <HeaderLogout>
            로그아웃
          </HeaderLogout>
        </HeaderInnerWrapper>
      </HeaderWrapper>
    );
  }
}

export default HeaderComponent;
