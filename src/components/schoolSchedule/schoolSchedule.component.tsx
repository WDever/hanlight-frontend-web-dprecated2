import * as React from 'react';
import styled from 'styled-components';

interface SchoolScheduleProps {}

interface SchoolScheduleState {}

const SchoolSchedule = styled.div`
  background-color: #ffe2e4;
`;

class SchoolScheduleComponent extends React.Component<SchoolScheduleProps, SchoolScheduleState> {
  public render() {
    return (
      <SchoolSchedule />
    );
  }
}

export default SchoolScheduleComponent;
