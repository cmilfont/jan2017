import actions from 'api/actions';

export default (state = [], { type, payload }) => {
  if (type === actions.gym.requestSuccess) {
    return payload;
  }
  return state;
}
