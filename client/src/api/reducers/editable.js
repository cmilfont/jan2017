import actions from 'api/actions';

export default (state, { type, payload }) => {

  if (actions.training.edit === type) {
    return payload;
  }

  if (actions.training.update === type) {
    return payload;
  }
  
  return {};
}
