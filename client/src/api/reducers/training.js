import actions from 'api/actions';

export default (state = {}, { type, payload }) => {

  if (type === actions.training.requestSuccess || type === actions.training.dismissSuccess) {
    return payload;
  }

  if (type === actions.training.cancelSuccess ) {
    return {
      ...state,
      canceled: payload.canceled
    };
  }

  return state;
};
