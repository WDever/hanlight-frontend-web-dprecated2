import * as React from 'react';
import LoginComponent from '../../components/auth/login';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

interface LoginContainerProps {}

interface LoginMethod {}

const LoginContainer: React.SFC<
LoginContainerProps & LoginMethod & RouteComponentProps
> = () => {
  return <LoginComponent />;
};

const mapStateToProps = ({}) => ({});

const mapDispathToProps = ({}) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps,
  )(LoginContainer),
);
