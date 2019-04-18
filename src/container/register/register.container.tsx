import * as React from 'react';
import RegisterComponent from '../../components/auth/register';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  AppState,
  registerActions,
  registerReducerActions,
  RegisterParams,
} from '../../store';
import { connect } from 'react-redux';

export interface RegisterContainerProps {
  registerStatus: 'none' | 'pending' | 'success' | 'failure';
  signKey: string;
}

export interface RegisterMethod {
  register(data: RegisterParams): void;
}

const RegisterContainer: React.SFC<
RegisterContainerProps & RegisterMethod & RouteComponentProps
> = ({ registerStatus, signKey, register, history, match, location }) => {
  return (
    <RegisterComponent
      signKey={signKey}
      register={register}
      registerStatus={registerStatus}
      history={history}
      match={match}
      location={location}
    />
  );
};

const mapStateToProps = ({ register }: AppState) => ({
  registerStatus: register.registerStatus,
  signKey: register.signKey,
});

const mapDispatchToProps = (dispatch: Dispatch<registerReducerActions>) => ({
  register: bindActionCreators(registerActions.register, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RegisterContainer),
);
