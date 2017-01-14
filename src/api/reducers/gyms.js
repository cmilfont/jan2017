export default (state = [], action) => {

  console.log(action.type, action.payload);
  if (action.type === 'JJTEAM_SEARCH_REQUEST_SUCCESS') {
    return action.payload;
  }

  return state;
};