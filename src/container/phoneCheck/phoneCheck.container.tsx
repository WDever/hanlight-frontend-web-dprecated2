import * as React from 'react';
import PhoneCheckComponent from '../../components/auth/phoneCheck';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  AppState,
  PinType,
  PhoneCheckResType,
  VerifyPhoneParams,
  registerReducerActions,
  registerActions
} from '../../store';
import { connect } from 'react-redux';

export interface PhoneCheckContainerProps {
  signKey: string;
  getStateStatus: 'none' | 'pending' | 'success' | 'failure';
  getCodeStatus:
  | 'none'
  | 'PARTIALLY_AUTHENTICATED'
  | 'NOT_AUTHENTICATED'
  | 'BAD_PARAMS';
  state: string;
  code: string;
  verifyStatus: 'none' | 'pending' | 'success' | 'failure';
}

export interface PhoneCheckMethod {
  getState(pin: PinType): void;
  getCode(res: PhoneCheckResType): void;
  verifyPhone(data: VerifyPhoneParams): void;
}

const PhoneCheckContainer: React.SFC<
PhoneCheckContainerProps & PhoneCheckMethod & RouteComponentProps
> = ({ getState, signKey, getStateStatus, state, getCode, code, verifyPhone, verifyStatus, getCodeStatus, history, match, location }) => {
// > = ({ getState, getStateStatus, state, getCode, code, verifyPhone, verifyStatus, history, match, location }) => {
  return (
    <PhoneCheckComponent
      getState={getState}
      signKey={signKey}
      getStateStatus={getStateStatus}
      state={state}
      getCode={getCode}
      history={history}
      match={match}
      location={location}
      verifyPhone={verifyPhone}
      verifyStatus={verifyStatus}
      code={code}
      getCodeStatus={getCodeStatus}
    />
  );
};

const mapStateToProps = ({ register }: AppState) => ({
  signKey: register.signKey,
  getStateStatus: register.getStateStatus,
  state: register.state,
  code: register.code,
  verifyStatus: register.verifyStatus,
  getCodeStatus: register.getCodeStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<registerReducerActions>) => ({
  getState: bindActionCreators(registerActions.getState, dispatch),
  getCode: bindActionCreators(registerActions.getCode, dispatch),
  verifyPhone: bindActionCreators(registerActions.verifyPhone, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PhoneCheckContainer),
);
