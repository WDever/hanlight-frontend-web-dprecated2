import * as React from 'react';
import styled from 'styled-components';

interface ProfilePictureComponentProps {
  imgSrc: string;
}

interface ProfilePictureComponentState {}

const ProfilePictureImg = styled.img`
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 50%;
  cursor: pointer;

  /* border: 1px solid black; */
`;

class ProfilePictureComponent extends React.Component<ProfilePictureComponentProps, ProfilePictureComponentState> {
  public render() {
    const { imgSrc } = this.props;
    return (
      <ProfilePictureImg src={imgSrc} />
    );
  }
}

export default ProfilePictureComponent;
