import actions from 'api/actions';

export default (state, { type, payload }) => {
  return (actions.training.edit === type) ? payload : {};
}
