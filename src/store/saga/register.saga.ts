import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  RegisterParams,
  Register
} from '../action';
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const registerApi = (data: RegisterParams) =>
  axios
    .post('http://54.180.114.156:3000/api/verify/regisgter', {
      id: data.id,
      password: data.password,
      signKey: data.signKey,
    })
    .then(res => res.data);

function* joinSaga(action: Register ) {
  if(action.type) {
    try {
      const response = yield call(registerApi, action.payload);
      console.log(response);
      yield put({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (e) {
      console.log(e.response);
      yield put({ type: REGISTER_FAILURE, paylaod: e.response});
    }
  }
}

function* registerSaga() {
  yield takeEvery(REGISTER, joinSaga);
}

export { registerSaga };
