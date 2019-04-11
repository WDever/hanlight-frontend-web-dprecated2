import * as React from 'react';
import styled from 'styled-components';
import NewImg from '../../../lib/svg/NewLabel.svg';
import { NoticeItemTypes } from '../noticeList.component';

// interface NoticeItemComponentProps {
//   title: string;
//   date: string;
//   lately: boolean;
// }

interface NoticeItemComponentProps extends NoticeItemTypes {}

const NoticeItemWrapper = styled.div`
  /* width: 100%; */
  width: 50rem;
  height: 3.125rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NoticeTitle = styled.span`
  width: 75%;
  font-family: 'Roboto';
  font-size: 1.25rem;
  margin-left: 0.5rem;
  text-indent: 0.5rem;
`;

const EtcWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 0.5rem;
`;

const NewLabel = styled.img`
`;

const DateSpan = styled.span`
  color: #8a8a8f;
  font-size: 1.25rem;
  font-family: 'Roboto';
`;

const NoticeItemComponent: React.SFC<NoticeItemComponentProps> = ({ title, date, lately }) => {
  return (
    <NoticeItemWrapper>
      <NoticeTitle>
        {title}
      </NoticeTitle>
      <EtcWrapper>
        <NewLabel src={NewImg} alt='' style={{ visibility: lately ? 'visible' : 'hidden' }} />
        <DateSpan>
          {date}
        </DateSpan>
      </EtcWrapper>
    </NoticeItemWrapper>
  );
}

export default NoticeItemComponent;
