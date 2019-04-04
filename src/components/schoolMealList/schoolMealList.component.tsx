import * as React from 'react';
import styled from 'styled-components';

interface SchoolMealListComponentProps {}

interface SchoolMealListComponentState {}

const SchoolMealList = styled.div`
  background-color: #E2F1FF;
`;

class SchoolMealListComponent extends React.Component<SchoolMealListComponentProps, SchoolMealListComponentState> {
  public render() {
    return (
      <SchoolMealList />
    );
  }
}

export default SchoolMealListComponent;
