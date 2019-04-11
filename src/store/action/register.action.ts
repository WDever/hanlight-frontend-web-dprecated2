import { Action } from 'redux';
import { createStandardAction } from 'typesafe-actions';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export interface RegisterParams {
  id: string;
  password: string;
  signKey: string;
}

export interface RegisterResType {
  success: boolean;
}

export class Register implements Action {
  public readonly type = REGISTER;
  public constructor(public payload: RegisterParams) {}
}

export class RegisterSuccess implements Action {
  public readonly type = REGISTER_SUCCESS;
  public constructor(public payload: RegisterResType) {}
}

export class RegisterFailure implements Action {
  public readonly type = REGISTER_FAILURE;
}

export const registerActions = {
  register: createStandardAction(REGISTER)<RegisterParams>(),
};

export type registerReducerActions =
  | Register
  | RegisterSuccess
  | RegisterFailure;
