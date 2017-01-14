function middleware(store) {

  return function(dispatch) {

    return function (action) {

      if (action.type === 'JJTEAM_SEARCH_REQUEST'){
        fetch('/api/search')
          .then(request => request.json())
          .then(payload => (
            store.dispatch({
              type: 'JJTEAM_SEARCH_REQUEST_SUCCESS',
              payload,
            })
          ))
      }

      return dispatch(action);
    }

  }

}

export default middleware;