import * as React from 'react';
import styled from 'styled-components';

interface NoticeBannerProps {}

interface NoticeBannerState {}

const NoticeBanner = styled.div`
  background-color: #FFE6CF;
  grid-column-start: 3;
  grid-column-end: 5;
`;

class NoticeBannerComponent extends React.Component<NoticeBannerProps, NoticeBannerState> {
  public render() {
    return (
      <NoticeBanner />
    );
  }
}

export default NoticeBannerComponent;
