import * as React from 'react';
import PhoneCheckComponent from '../../components/auth/phoneCheck';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  AppState,
  phoneCheckActions,
  phoneCheckReducerActions,
  PinType,
  PhoneCheckResType,
  VerifyPhoneParams,
  VerifyPhoneRes
} from '../../store';
import { PhoneCheckModel } from '../../store/model/phoneCheck.model';
import { connect } from 'react-redux';

export interface PhoneCheckContainerProps {
  signKey: string;
  getStateStatus: 'none' | 'pending' | 'success' | 'failure';
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
> = ({ getState, signKey, getStateStatus, state, getCode, code, verifyPhone, verifyStatus, history, match, location }) => {
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
    />
  );
};

const mapStateToProps = ({ phoneCheck }: AppState) => ({
  signKey: phoneCheck.signKey,
  getStateStatus: phoneCheck.getStateStatus,
  state: phoneCheck.state,
  code: phoneCheck.code,
  verifyStatus: phoneCheck.verifyStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<phoneCheckReducerActions>) => ({
  getState: bindActionCreators(phoneCheckActions.getState, dispatch),
  getCode: bindActionCreators(phoneCheckActions.getCode, dispatch),
  verifyPhone: bindActionCreators(phoneCheckActions.verifyPhone, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PhoneCheckContainer),
);
