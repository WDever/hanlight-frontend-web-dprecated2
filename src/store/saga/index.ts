import { all } from 'redux-saga/effects';
import { phoneCheckSaga } from './phoneCheck.saga';
import { registerSaga } from './register.saga';

function* rootSaga() {
  yield all([phoneCheckSaga(), registerSaga()]);
}

export { rootSaga };
