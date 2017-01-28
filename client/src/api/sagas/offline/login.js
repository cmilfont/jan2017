import { takeLatest } from 'redux-saga/effects';
import {  put, select  } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

const failure = payload => ({
  type: actions.user.loginFailure,
  payload,
});

export function* prepareSaga(action) {
  const payload = yield window.localforage.getItem('user');
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    yield put({ type: actions.user.logged, payload });
    const { navigation } = yield select();
    yield put(push(navigation));
    yield put({ type: actions.navigation.destination, payload: '/' });

  }
}

export default function* watchLogin() {
  yield takeLatest(actions.user.rememberMe, prepareSaga);
}
