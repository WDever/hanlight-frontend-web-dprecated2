import * as React from 'react';
import styled from 'styled-components';

interface SchoolMealListProps {}

interface SchoolMealListState {}

const SchoolMealList = styled.div`
  background-color: #E2F1FF;
`;

class SchoolMealListComponent extends React.Component<SchoolMealListProps, SchoolMealListState> {
  public render() {
    return (
      <SchoolMealList />
    );
  }
}

export default SchoolMealListComponent;
