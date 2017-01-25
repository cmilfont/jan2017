export const NAMESPACE = 'RGT';

export const user = {
  login: `${NAMESPACE}_USER_LOGIN`,
  loginFailure: `${NAMESPACE}_USER_LOGIN_ERROR`,
  logged: `${NAMESPACE}_USER_LOGGED`,
  loaded: `${NAMESPACE}_USER_LOADED`,
  logout: `${NAMESPACE}_USER_LOGOUT`,
  register: `${NAMESPACE}_USER_REGISTER`,
  registerFailure: `${NAMESPACE}_USER_ERROR`,
  reset: `${NAMESPACE}_USER_RESET_PASSWORD`,
  resetFailure: `${NAMESPACE}_USER_RESET_PASSWORD_ERROR`,
  hasBeenReset: `${NAMESPACE}_USER_HAS_BEEN_RESET_PASSWORD_MESSAGE`,
  change: `${NAMESPACE}_USER_CHANGE_PASSWORD`,
  changeFailure: `${NAMESPACE}_USER_CHANGE_PASSWORD_ERROR`,
  rememberMe: `${NAMESPACE}_USER_REMEMBER_ME`,
};

export const facebook = {
  login: `${NAMESPACE}_FACEBOOK_LOGIN`,
};

export const swipe = {
  left: `${NAMESPACE}_SWIPE_LEFT`,
  right: `${NAMESPACE}_SWIPE_RIGHT`,
};

export const gym = {
  request: `${NAMESPACE}_GYM_REQUEST`,
  requestSuccess: `${NAMESPACE}_GYM_REQUEST_SUCCESS`,
  requestFailure: `${NAMESPACE}_GYM_REQUEST_ERROR`,
};

export const training = {
  request: `${NAMESPACE}_TRAINING_REQUEST`,
  requestSuccess: `${NAMESPACE}_TRAINING_REQUEST_SUCCESS`,
  requestFailure: `${NAMESPACE}_TRAINING_REQUEST_ERROR`,
  apply: `${NAMESPACE}_TRAINING_APPLY`,
  applySuccess: `${NAMESPACE}_TRAINING_APPLY_SUCCESS`,
  applyFailure: `${NAMESPACE}_TRAINING_APPLY_ERROR`,
  approve: `${NAMESPACE}_TRAINING_APPROVE`,
  approveSuccess: `${NAMESPACE}_TRAINING_APPROVE_SUCCESS`,
  approveFailure: `${NAMESPACE}_TRAINING_APPROVE_ERROR`,
  verify: `${NAMESPACE}_TRAINING_VERIFY`,
  create: `${NAMESPACE}_TRAINING_CREATE`,
  createSuccess: `${NAMESPACE}_TRAINING_CREATE_SUCCESS`,
  createFailure: `${NAMESPACE}_TRAINING_CREATE_ERROR`,
  dismiss: `${NAMESPACE}_TRAINING_DISMISS`,
  dismissSuccess: `${NAMESPACE}_TRAINING_DISMISS_SUCCESS`,
  dismissFailure: `${NAMESPACE}_TRAINING_DISMISS_ERROR`,
  cancel: `${NAMESPACE}_TRAINING_CANCEL`,
  cancelSuccess: `${NAMESPACE}_TRAINING_CANCEL_SUCCESS`,
  cancelFailure: `${NAMESPACE}_TRAINING_CANCEL_ERROR`,
  edit: `${NAMESPACE}_TRAINING_EDIT`,
  update: `${NAMESPACE}_TRAINING_UPDATE`,
  save: `${NAMESPACE}_TRAINING_SAVE`,
  saveSuccess: `${NAMESPACE}_TRAINING_SAVE_SUCCESS`,
  saveFailure: `${NAMESPACE}_TRAINING_SAVE_ERROR`,
};

export const notifications = {
  request: `${NAMESPACE}_NOTIFICATIONS_REQUEST`,
  requestSuccess: `${NAMESPACE}_NOTIFICATIONS_REQUEST_SUCCESS`,
  requestFailure: `${NAMESPACE}_NOTIFICATIONS_REQUEST_ERROR`,
};

export const navigation = {
  destination: `${NAMESPACE}_NAVIGATION_DESTINATION`,
};

export const error = {
  login: `${NAMESPACE}_ERROR_LOGIN`,
};

const actions = {
  error,
  user,
  swipe,
  facebook,
  gym,
  training,
  notifications,
  navigation,
};

export const nextAction = type => ({
  success: payload => ({
    type: `${type}_SUCCESS`,
    payload,
  }),
});

export const defaultCrudAction = (
  dispatch, actionType, entity, method = 'GET', url,
) => (
  payload => (
    dispatch({
      entity,
      method,
      url,
      type: actionType,
      payload,
    })
  )
);

export const defaultAction = (dispatch, actionType) => (
  payload => (
    dispatch({
      type: actionType,
      payload,
    })
  )
);

export const doLoginAction = dispatch => (
  {
    doSubmit: defaultAction(dispatch, actions.user.login),
    doRemember: defaultAction(dispatch, actions.user.rememberMe),
  }
);

export const doRegisterAction = dispatch => (
  {
    doSubmit: defaultAction(dispatch, actions.user.register),
  }
);

export const doResetAction = dispatch => (
  {
    doSubmit: defaultAction(dispatch, actions.user.reset),
  }
);

export const doChangeAction = dispatch => (
  {
    doSubmit: defaultAction(dispatch, actions.user.change),
  }
);

export const mapMenuDispatchToProps = dispatch => (
  {
    updateFacebook: defaultAction(dispatch, actions.facebook.login),
    logout: defaultAction(dispatch, actions.user.logout),
  }
);

export const mapSearchDispatchToProps = dispatch => (
  {
    request: defaultAction(dispatch, actions.gym.request),
  }
);

export const mapTrainingDispatchToProps = dispatch => (
  {
    request: defaultAction(dispatch, actions.training.request),
    apply: defaultAction(dispatch, actions.training.apply),
    dismiss: defaultAction(dispatch, actions.training.dismiss),
    approve: defaultAction(dispatch, actions.training.approve),
    verify: defaultAction(dispatch, actions.training.verify),
    create: defaultAction(dispatch, actions.training.create),
    cancel: defaultAction(dispatch, actions.training.cancel),
    edit: defaultAction(dispatch, actions.training.edit),
    save: defaultAction(dispatch, actions.training.save),
    update: defaultAction(dispatch, actions.training.update),
    goToTraining: (payload) => (dispatch(payload)),
  }
);

export default actions;
