import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import actions from 'api/actions';
import defaultFetch from 'api/sagas/fetch/defaultFetch.js';

const failure = payload => ({
  type: actions.gym.requestFailure,
  payload,
});

export function* prepareSaga() {
  const payload = yield call(defaultFetch, '/api/search');
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    yield window.localforage.setItem('gyms', payload);
    yield put({ type: actions.gym.requestSuccess, payload });
  }
}

function* search() {
  yield takeLatest(actions.gym.request, prepareSaga);
}

export default search;
