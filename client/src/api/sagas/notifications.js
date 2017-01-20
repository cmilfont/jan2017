import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import actions from 'api/actions';
import defaultFetch from 'api/sagas/fetch/defaultFetch.js';

const failure = payload => ({
  type: actions.notifications.requestFailure,
  payload,
});

export function* prepareSaga() {
  const payload = yield call(defaultFetch, '/api/notifications' );
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    yield put({ type: actions.notifications.requestSuccess, payload });
  }
}

function* notifications() {
  yield takeLatest([
    actions.training.request,
    actions.gym.request,
    actions.swipe.left,
    actions.swipe.right,
  ], prepareSaga);
}

export default notifications;