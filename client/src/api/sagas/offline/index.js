import { fork } from 'redux-saga/effects';

import watchLogin from 'api/sagas/offline/login';
import search from 'api/sagas/offline/search';

function* offlineSaga() {
  yield fork(watchLogin);
  yield fork(search);
}

export default offlineSaga;
