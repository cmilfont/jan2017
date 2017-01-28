import { fork } from 'redux-saga/effects';

import watchLogin from 'api/sagas/offline/login';

function* offlineSaga() {
  yield fork(watchLogin);
}

export default offlineSaga;
