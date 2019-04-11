import * as React from 'react';
import styled from 'styled-components';
import test from '../../lib/svg/name.svg';

interface PostFormComponentState {}

interface PostFormComponentProps {}

const PostForm = styled.form`
  width: 50rem;
  height: 7.5rem;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3% 0;
`;

const ProfilePic = styled.img`
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 50%;

  border: 1px solid black;
`;

const PostInput = styled.input`
  width: 80%;
  height: auto;
  font-size: 1.25rem;

  border: none;
  outline: none;

  margin-right: 1rem;
`;

class PostFormComponent extends React.Component<
  PostFormComponentProps,
  PostFormComponentState
  > {
  public render() {
    return (
      <PostForm>
        <ProfilePic src={test} alt='' />
        <PostInput type='text' placeholder='인싸가 되기 위한 지름길, 그것은 대나무 숲에 글 쓰기' />
      </PostForm>
    );
  }
}

export default PostFormComponent;
