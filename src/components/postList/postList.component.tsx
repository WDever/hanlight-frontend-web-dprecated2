import * as React from 'react';
import styled from 'styled-components';
import PostItem from '../postItem';

export interface PostItemTypes {
  userName: string;
  date: string;
  content: string;
  likeIdx: number;
}

interface PostListComponentProps {}

interface PostListComponentState {
  PostList: PostItemTypes[];
}

const PostListWrapper = styled.div`
  width: 100%;
  height: 25rem;
  /* overflow: scroll; */
`;

const PostListDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #f2f4f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class PostListComponent extends React.Component<
  PostListComponentProps,
  PostListComponentState
  > {
  public state: PostListComponentState = {
    PostList: [
      {
        userName: '한규언',
        date: '201903091745',
        content: `나는 고등학생 코코몽 한규언.
        소꿉친구이면서 같은반 창원이와 놀이공원에 놀러갔다가 검은 양복을 입은 
        남자들의 수상한 현장을 목격하게 되었다. 거래 장면을 살피는데 정신이 팔린
        나는 다른 한명이 등 뒤에서 접근하는 것을 알아채지 못했다. 그런데..
        그 남자가 먹인 약 때문에 정신을 잃었다가
        눈을 떠보니,
        (우혁이 목소리)학생회장으로 변해 있었따...`,
        likeIdx: 400,
      },
      {
        userName: 'test',
        date: '201903231212',
        content: 'testestestestestestestestetsettestestestestestyestestestes',
        likeIdx: 1,
      },
    ],
  };
  public render() {
    const { PostList } = this.state;
    const postList = PostList.map((item, idx) => {
      return (
        <PostItem
          userName={item.userName}
          date={item.date}
          content={item.content}
          likeIdx={item.likeIdx}
          key={idx}
        />
      );
    });
    return (
      <PostListWrapper>
        <PostListDiv>{postList}</PostListDiv>
      </PostListWrapper>
    );
  }
}

export default PostListComponent;
