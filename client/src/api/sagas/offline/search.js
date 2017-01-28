import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import actions from 'api/actions';


export function* prepareSaga() {
  
  const payload = yield window.localforage.getItem('gyms') || {};
  yield put({
    type: actions.gym.requestSuccess,
    payload
  })
}

function* search() {
  yield takeLatest(actions.gym.request, prepareSaga);
}

export default search;
