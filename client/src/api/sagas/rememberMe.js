import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';
import defaultFetch from 'api/sagas/fetch/defaultFetch.js';

const failure = payload => ({
  type: actions.user.loginFailure,
  payload,
});

export function* prepareSaga() {
  const payload = yield call(defaultFetch, '/api/user');
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    if (payload.id) {
      yield window.localforage.setItem('user', payload);
      yield put({ type: actions.user.logged, payload });
      const { navigation } = yield select();
      yield put(push(navigation));
      yield put({ type: actions.navigation.destination, payload: '/' });
    }
  }
}

function* rememberMe() {
  yield takeLatest(actions.user.rememberMe, prepareSaga);
}

export default rememberMe;