import * as React from 'react';
import styled from 'styled-components';
import { PostItemTypes } from '../postList/postList.component';
import test from '../../../lib/svg/name.svg';
import optionTest from '../../../lib/svg/three-dots-more-indicator.svg';
import LikeSrc from '../../../lib/svg/like.svg';
import EmptyLike from '../../../lib/svg/like-empty.svg';

interface PostItemState {}

interface PostItemProps extends PostItemTypes {}

const PostItemDiv = styled.div`
  background-color: white;
  width: 50rem;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;
`;

const ProfileWrapper = styled.div`
  width: 95%;
  height: auto;

  display: flex;
  justify-content: space-around;

  margin-top: 0.5rem;
`;

const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 75%;
`;

const ProfileNameP = styled.p`
  font-size: 1.5rem;
  font-family: 'NanumSquare';
  margin: 0;
`;

const ProfileDate = styled.p`
  color: #979797;
  font-size: 1.25rem;
  font-family: 'NanumSquare';
  margin: 0;
`;

const OptionImg = styled.img`
  /* width: 4.0625rem;
  height: 4.0625rem; */
  margin-right: 1rem;

  cursor: pointer;
`;

const PostContent = styled.div`
  width: 46.5625rem;
  height: auto;
  background-color: white;
  font-family: 'NanumSquare';
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const MorePost = styled.span`
  color: #8a8a8f;
  font-size: 1.25rem;
  font-family: 'NanumSquare';
  cursor: pointer;
`;

const LikeListWrapper = styled.div`
  width: 95%;
  height: auto;
  background-color: white;
  font-size: 1.25rem;
  color: #8a8a8f;
  font-family: 'NanumSquare';

  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
`;

const LikeImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

const LikeList = styled.span`
  width: 90%;
`;

const CommentWrapper = styled.div`
  width: 95%;
  height: auto;

  margin: 0.5rem 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const UserProfilePic = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid black;
`;

const CommentInput = styled.input`
  /* width: 35.125rem; */
  width: 38rem;
  height: 3.125rem;

  border: solid 0.8px #a4a4a4;

  font-size: 1.5rem;
  font-family: 'NanumSquare';

  ::placeholder {
    color: #d3d3d3;
    text-indent: 0.5rem;
    font-family: 'NanumSquare';
  }
`;

const LikeBtn = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  cursor: pointer;
`;

const ProfilePic = styled.img`
  width: 4.0625rem;
  height: 4.0626rem;
  border-radius: 50%;
`;

class PostItem extends React.Component<PostItemProps, PostItemState> {
  public render() {
    const {
      userName, date, content, likeIdx,
    } = this.props;
    return (
      <PostItemDiv>
        <ProfileWrapper>
          <ProfilePic src={test} />
          <ProfileNameWrapper>
            <ProfileNameP>{userName}</ProfileNameP>
            <ProfileDate>{date}</ProfileDate>
          </ProfileNameWrapper>
          <OptionImg src={optionTest} />
        </ProfileWrapper>
        <PostContent>
          {content}
          <MorePost>더보기</MorePost>
        </PostContent>
        <LikeListWrapper>
          <LikeImg src={LikeSrc} />
          <LikeList>{`${likeIdx}명`}</LikeList>
        </LikeListWrapper>
        <CommentWrapper>
          <UserProfilePic src={test} />
          <CommentInput type="text" placeholder="댓글을 입력하세요" />
          <LikeBtn src={EmptyLike} />
        </CommentWrapper>
      </PostItemDiv>
    );
  }
}

export default PostItem;
