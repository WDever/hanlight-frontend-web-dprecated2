import { Action } from 'redux';
import { createAction, createStandardAction } from 'typesafe-actions';

export const GET_STATE = 'GET_STATE';
export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_FAILURE = 'GET_STATE_FAILURE';
export const GET_CODE = 'GET_CODE';
export const VERIFY_PHONE = 'VERIFY_PHONE';
export const VERIFY_PHONE_SUCCESS = 'VERIFY_PHONE_SUCCESS';
export const VERIFY_PHONE_FAILURE = 'VERIFY_PHONE_FAILURE';

export type PinType = string;

export interface PhoneCheckResType {
  code: string;
  state: string;
  status: 'PARTIALLY_AUTHENTICATED' | 'NOT_AUTHENTICATED' | 'BAD_PARAMS';
}

export interface StateResType {
  success: boolean;
  data: {
    state: string;
  };
}

export interface VerifyPhoneParams {
  code: string;
  state: string;
  signKey: string;
}

export interface VerifyPhoneRes {
  success: boolean;
}

export class GetState implements Action {
  public readonly type = GET_STATE;
  public constructor(public payload: PinType) {}
}

export class GetStateSuccess implements Action {
  public readonly type = GET_STATE_SUCCESS;
  public constructor(public payload: StateResType) {}
}

export class GetStateFailure implements Action {
  public readonly type = GET_STATE_FAILURE;
}

export class GetCode implements Action {
  public readonly type = GET_CODE;
  public constructor(public payload: PhoneCheckResType) {}
}

export class VerifyPhone implements Action {
  public readonly type = VERIFY_PHONE;
  public constructor(public payload: VerifyPhoneParams) {}
}

export class VerifyPhoneSuccess implements Action {
  public readonly type = VERIFY_PHONE_SUCCESS;
  public constructor(public payload: VerifyPhoneRes) {}
}

export class VerifyPhoneFailure implements Action {
  public readonly type = VERIFY_PHONE_FAILURE;
}

export const phoneCheckActions = {
  getState: createStandardAction(GET_STATE)<PinType>(),
  getCode: createStandardAction(GET_CODE)<PhoneCheckResType>(),
  verifyPhone: createStandardAction(VERIFY_PHONE)<VerifyPhoneParams>(),
};

export type phoneCheckReducerActions =
  | GetState
  | GetStateSuccess
  | GetStateFailure
  | GetCode
  | VerifyPhone
  | VerifyPhoneSuccess
  | VerifyPhoneFailure;
