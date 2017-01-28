import "babel-polyfill";
import 'whatwg-fetch';
import 'global/config.js';

import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

/* API */
import BioMiddleware from 'api/middlewares/BioMiddleware.js';
import ApiReducers from 'api/reducers';
import Sagas from 'api/sagas';
import actions from 'api/actions';

/* Controle de usuário */
import Login from 'components/user/Login.js';
import Register from 'components/user/Register.js';
import ResetPassword from 'components/user/ResetPassword.js';
import ChangePassword from 'components/user/ChangePassword.js';

/* Features */
import Base from 'components/Base';
import Training from 'components/training/Training';
import Search from 'components/search/Search';

class App extends Component {

  componentDidMount() {

  }

  render() {

    const sagaMiddleware = createSagaMiddleware({
      onError: (error) => {
        //window.airbrake.notify(error);
      },
    });

    const reducers = combineReducers({ routing: routerReducer, ...ApiReducers });

    const middlewares = [ routerMiddleware(browserHistory), sagaMiddleware, BioMiddleware ];

    const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

    const history = syncHistoryWithStore(browserHistory, store);

    const validateUser = (nextState, replace, callback) => {
      const { user } = store.getState();
      if (user && !user.id) {
        const { location: { pathname: payload } } = nextState;
        store.dispatch({ type: actions.navigation.destination, payload });
        replace('/login');
      }
      callback();
    };

    sagaMiddleware.run(Sagas);

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/index.html" component={Base}>
            <IndexRedirect to="/search" />
          </Route>
          <Route path="/" component={Base}>
            <IndexRedirect to="/search" />
            <Route path="search" component={Search} onEnter={validateUser}  />
            <Route path="training" component={Training} onEnter={validateUser}  />
            <Route path="training/:id" component={Training} onEnter={validateUser}  />
          </Route>
          <Route path="/login" component={Login}  />
          <Route path="/register" component={Register}  />
          <Route path="/reset/password" component={ResetPassword}  />
          <Route path="/token/:token" component={ChangePassword}  />
        </Router>
      </Provider>
    );
  }
}

export default App;
