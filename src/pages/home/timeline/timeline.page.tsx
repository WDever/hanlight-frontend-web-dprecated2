import * as React from 'react';
import styled from 'styled-components';
import PostItem from '../../../components/post/postItem';
import PostForm from '../../../components/post/postForm';
import PostList from '../../../components/post/postList';
import NoticeItem from '../../../components/noticeList/noticeItem';
import NoticeList from '../../../components/noticeList';

const TimeLineWrapper = styled.div`
  background-color: #f2f4f7;
  width: 100%;
  /* min-height: 100%; */
  height: auto;

  /* overflow: scroll; */

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TimelinePage: React.SFC<{}> = () => (
  <TimeLineWrapper>
    <NoticeList />
    <PostForm />
    <PostList />
  </TimeLineWrapper>
);

export default TimelinePage;
