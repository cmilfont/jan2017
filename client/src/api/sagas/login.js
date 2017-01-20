import { takeLatest } from 'redux-saga/effects';
import { call, put, select  } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';
import defaultFetch from 'api/sagas/fetch/defaultFetch.js';

const failure = payload => ({
  type: actions.user.loginFailure,
  payload,
});

export function* prepareSaga(action) {
  const payload = yield call(defaultFetch, '/api/login', action.payload, 'POST');
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    yield window.localforage.setItem('user', payload);
    yield put({ type: actions.user.logged, payload });
    const { navigation } = yield select();
    yield put(push(navigation));
    yield put({ type: actions.navigation.destination, payload: '/' });

  }
}

export default function* watchLogin() {
  yield takeLatest(actions.user.login, prepareSaga);
}
