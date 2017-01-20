import { NAMESPACE } from 'api/actions.js';

function middleware(store) {
  return dispatch => (
    (action) => {
      const type = (action.type) ? action.type : 'STRANGER_ERROR';
      const keys = type.split('_');
      if (keys[0] === NAMESPACE) {
        const { user } = store.getState();
        const label = (user && user.id) ? `userId: ${user.id}` : '';
        window.ReactGA.event({
          category: keys[1],
          action: keys[2],
          label,
        });
      }

      if (action.type === "@@router/LOCATION_CHANGE") {
        window.ReactGA.set({ page: window.location.pathname });
        window.ReactGA.pageview(window.location.pathname);
      }

      return dispatch(action);
    }
  );
}

export default middleware;
