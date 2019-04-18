export interface RegisterModel {
  signKey: string;
  getStateStatus: 'none' | 'pending' | 'success' | 'failure';
  state: string;
  code: string;
  getCodeStatus:
  | 'none'
  | 'PARTIALLY_AUTHENTICATED'
  | 'NOT_AUTHENTICATED'
  | 'BAD_PARAMS';
  verifyStatus: 'none' | 'pending' | 'success' | 'failure';
  registerStatus: 'none' | 'pending' | 'success' | 'failure';
}
