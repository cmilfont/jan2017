import actions from 'api/actions';

export default (state = '/', { type, payload }) => {

  if (type === actions.navigation.destination) {
    return payload;
  }

  return state;
}