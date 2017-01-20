import actions from 'api/actions';

export default (state = [], { type, payload }) => {

  if (type === actions.notifications.requestSuccess) {
    return payload;
  }

  return state;
};