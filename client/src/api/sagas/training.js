import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import actions from 'api/actions';
import defaultFetch from 'api/sagas/fetch/defaultFetch.js';

const failureCreate = payload => ({
  type: actions.training.createFailure,
  payload,
});

export function* prepareCreateSaga(action) {
  const payload = yield call(defaultFetch, '/api/training', action.payload, 'POST');
  const { error } = payload;
  if (error) {
    yield put(failureCreate(error));
  } else {
    yield put({ type: actions.gym.request });
  }
}

export function* createSaga() {
  yield takeLatest(actions.training.create, prepareCreateSaga);
}

const failureApply = payload => ({
  type: actions.training.applyFailure,
  payload,
});

export function* prepareApplySaga({ payload: { id } }) {
  const payload = yield call(defaultFetch, `/api/training/${id}/apply`, {}, 'POST');
  const { error } = payload;
  if (error) {
    yield put(failureApply(error));
  } else {
    yield put({ type: actions.training.request, payload: { id }});
  }
}

export function* applySaga() {
  yield takeLatest(actions.training.apply, prepareApplySaga);
}

const failureDismiss = payload => ({
  type: actions.training.dismissFailure,
  payload,
});

export function* prepareDismissSaga({ payload: { id } }) {
  const payload = yield call(defaultFetch, `/api/training/${id}/dismiss`, { id: '' }, 'DELETE');
  const { error } = payload;
  if (error) {
    yield put(failureDismiss(error));
  } else {
    yield put({ type: actions.training.dismissSuccess, payload: {}});
  }
}

export function* dismissSaga() {
  yield takeLatest(actions.training.dismiss, prepareDismissSaga);
}

const failureApprove = payload => ({
  type: actions.training.approveFailure,
  payload,
});

export function* prepareApproveSaga({ payload: { TrainingId, ParticipantId } }) {
  const payload = yield call(defaultFetch, `/api/training/${TrainingId}/approve/${ParticipantId}`, {}, 'POST');
  const { error } = payload;
  if (error) {
    yield put(failureApprove(error));
  } else {
    yield put({ type: actions.training.request, payload: { id: TrainingId }});
  }
}

export function* approveSaga() {
  yield takeLatest(actions.training.approve, prepareApproveSaga);
}

const failure = payload => ({
  type: actions.training.requestFailure,
  payload,
});


export function* prepareVerifySaga() {
  const payload = yield call(defaultFetch, '/api/training/verify');
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    const { Training } = payload;
    yield put({ type: actions.training.requestSuccess, payload: Training || {} });
  }
}

export function* verifySaga() {
  yield takeLatest(actions.training.verify, prepareVerifySaga);
}

export function* prepareSaga({ payload: { id } }) {
  const payload = yield call(defaultFetch, `/api/training/${id}`);
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    yield put({ type: actions.training.requestSuccess, payload });
  }
}

function* search() {
  yield takeLatest(actions.training.request, prepareSaga);
}

function* prepareCancel(action) {
  console.log('Saga', action);
  const { id } = action.payload;
  const payload = yield call(defaultFetch, `/api/training/${id}/cancel`, { id: '' }, 'PUT');
  const { error } = payload;
  if (error) {
    yield put(failure(error));
  } else {
    yield put({ type: actions.training.cancelSuccess, payload });
  }

}

export function* cancelSaga() {
  yield takeLatest(actions.training.cancel, prepareCancel);
}

export default search;
