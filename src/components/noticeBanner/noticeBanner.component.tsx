import * as React from 'react';
import styled from 'styled-components';

interface NoticeBannerComponentProps {}

interface NoticeBannerComponentState {}

const NoticeBanner = styled.div`
  background-color: #FFE6CF;
  grid-column-start: 3;
  grid-column-end: 5;
`;

class NoticeBannerComponent extends React.Component<NoticeBannerComponentProps, NoticeBannerComponentState> {
  public render() {
    return (
      <NoticeBanner />
    );
  }
}

export default NoticeBannerComponent;
