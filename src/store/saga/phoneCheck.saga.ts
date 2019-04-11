import {
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAILURE,
  VERIFY_PHONE,
  VERIFY_PHONE_SUCCESS,
  VERIFY_PHONE_FAILURE,
  VerifyPhone,
  VerifyPhoneParams,
  GetState,
  PinType,
} from '../action';
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const getStateApi = (value: PinType) =>
  axios
    .post('http://54.180.114.156:3000/api/verify/phone/state', {
      signKey: value,
    })
    .then(res => res.data);

function* getStateSaga(action: GetState) {
  if (action.type) {
    try {
      const response = yield call(getStateApi, action.payload);
      console.log(response);
      yield put({ type: GET_STATE_SUCCESS, payload: response.data });
    } catch (e) {
      console.log(e.response);
      yield put({ type: GET_STATE_FAILURE, payload: e.response });
    }
  }
}

const verifyPhoneApi = (data: VerifyPhoneParams) =>
  axios
    .post('http://54.180.114.156:3000/api/verify/phone', {
      code: data.code,
      state: data.state,
      signKey: data.signKey,
    })
    .then(res => res.data);

function* verifyPhoneSaga(action: VerifyPhone) {
  if (action.type) {
    try {
      const response = yield call(verifyPhoneApi, action.payload);
      console.log(response);
      yield put({ type: VERIFY_PHONE_SUCCESS, payload: response.data });
    } catch (e) {
      console.log(e.response);
      yield put({ type: VERIFY_PHONE_FAILURE, payload: e.response });
    }
  }
}

function* phoneCheckSaga() {
  yield takeEvery(GET_STATE, getStateSaga);
  yield takeEvery(VERIFY_PHONE, verifyPhoneSaga);
}

export { phoneCheckSaga };
