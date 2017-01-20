import { fork } from 'redux-saga/effects';

import watchLogin from 'api/sagas/login';
import watchRegister from 'api/sagas/register';
import watchLogout from 'api/sagas/logout';
import watchReset from 'api/sagas/reset';
import changePassword from 'api/sagas/changePassword';
import rememberMe from 'api/sagas/rememberMe';
import swipe from 'api/sagas/swipe';
import updateProfile from 'api/sagas/updateProfile';
import search from 'api/sagas/search';
import training, { applySaga, approveSaga, createSaga, verifySaga, dismissSaga } from 'api/sagas/training';

function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchRegister);
  yield fork(watchLogout);
  yield fork(watchReset);
  yield fork(changePassword);
  yield fork(rememberMe);
  yield fork(swipe);
  yield fork(updateProfile);
  yield fork(search);
  yield fork(training);
  yield fork(applySaga);
  yield fork(approveSaga);
  yield fork(createSaga);
  yield fork(verifySaga);
  yield fork(dismissSaga);
}

export default rootSaga;