import actions from 'api/actions';

export default (state = navigator.onLine, { type, payload }) => {

console.log(type, payload);
  if (type === actions.status.online || type === actions.status.offline) {
    return payload;
  }

  return state;
}
