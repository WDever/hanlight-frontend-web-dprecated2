import * as React from 'react';
import styled from 'styled-components';
import NoticeItem from './noticeItem';

export interface NoticeItemTypes {
  title: string;
  date: string;
  lately: boolean;
}

interface NoticeListComponentProps {}

interface NoticeListComponentState {
  NoticeList: NoticeItemTypes[];
}

const NoticeListWrapper = styled.div`
  width: 50rem;
  height: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const NoticeListDiv = styled.div`
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NoticeTitle = styled.div`
  width: 90%;
  font-size: 2.25rem;
  font-family: 'Roboto';

  display: flex;
  justify-content: space-between;
`;

const MoreBtn = styled.button`
  font-size: 1.5rem;
  font-family: 'Roboto';
  outline: none;
  border: 0;
  background-color: transparent;

  cursor: pointer;
`;

class NoticeListComponent extends React.Component<
  NoticeListComponentProps,
  NoticeListComponentState
  > {
  public state: NoticeListComponentState = {
    NoticeList: [
      {
        title: `IT와 디자인에 관련된 인터넷 강의를 제공하는
        인프런에서 행사를 진행...`,
        date: '20190329',
        lately: true
      },
      {
        title: `감자는 2019년 1학기를 기점으로 싹이 돋아 독이 되어 사람에게 잘렸다.`,
        date: '20190222',
        lately: false
      },
      {
        title: `이거 만들면 제발 잘 참여해주셨으면 좋겠네요. 학생 인프라 구축 만세!!`,
        date: '20181212',
        lately: false
      }
    ]
  }

  public render() {
    const { NoticeList } = this.state;
    const noticeList = NoticeList.map((item, idx) => {
      return (
        <NoticeItem
          title={item.title}
          date={item.date}
          lately={item.lately}
          key={idx}
        />
      )
    })
    return (
      <NoticeListWrapper>
        <NoticeTitle>
          공지사항
          <MoreBtn>
            더보기
          </MoreBtn>
        </NoticeTitle>
        <NoticeListDiv>
          {noticeList}
        </NoticeListDiv>
      </NoticeListWrapper>
    );
  }
}

export default NoticeListComponent;
