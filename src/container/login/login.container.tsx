import * as React from 'react';
import LoginComponent from '../../components/auth/login';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { AppState, userAcions, userReducerActions, LoginParams } from '../../store';

export interface LoginContainerProps {
  loginStatus: 'none' | 'pending' | 'success' | 'failure';
}

export interface LoginMethod {
  login(data: LoginParams): void;
}

const LoginContainer: React.SFC<
LoginContainerProps & LoginMethod & RouteComponentProps
> = ({ login, history, match, location, loginStatus }) => {
  return (
    <LoginComponent
      login={login}
      history={history}
      match={match}
      location={location}
      loginStatus={loginStatus}
    />
  );
};

const mapStateToProps = ({user}: AppState) => ({
  loginStatus: user.loginStatus,
});

const mapDispathToProps = (dispatch: Dispatch<userReducerActions>) => ({
  login: bindActionCreators(userAcions.login, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps,
  )(LoginContainer),
);
