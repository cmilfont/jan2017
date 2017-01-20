import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import actions from 'api/actions';
import defaultFetch from 'api/sagas/fetch/defaultFetch.js';

const failure = payload => ({
  type: actions.user.loginFailure,
  payload,
});

export function* prepareSaga(action) {
  const { name, picture: { data: { url: imageUrl } } } = action.payload
  const payload = yield call(defaultFetch, '/api/current_user', { id: '', name, imageUrl } , 'PUT');
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    yield window.localforage.setItem('user', payload);
    yield put({ type: actions.user.logged, payload });
  }
}

function* updateProfile() {
  yield takeLatest(actions.facebook.login, prepareSaga);
}

export default updateProfile;