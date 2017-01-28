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
import offlineSagas from 'api/sagas/offline';
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

  constructor(props) {
    super(props);
    this.sagaMiddleware = createSagaMiddleware({
      onError: (error) => {
        //window.airbrake.notify(error);
      },
    });
    const reducers = combineReducers({ routing: routerReducer, ...ApiReducers });
    const middlewares = [ routerMiddleware(browserHistory), this.sagaMiddleware, BioMiddleware ];
    this.store = createStore(reducers, compose(applyMiddleware(...middlewares)));
    this.history = syncHistoryWithStore(browserHistory, this.store);

    window.rgtStore = this.store;

  }

  componentDidMount() {

  }

  componentWillMount() {

    this.register();

    window.addEventListener('online',  this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }

  register = () => {
    const { onLine } = navigator;
    if (this.tasks) {
      this.tasks.cancel();
    }
    if (onLine) {
      this.tasks = this.sagaMiddleware.run(Sagas);
    } else {
      this.tasks = this.sagaMiddleware.run(offlineSagas);
    }
  }

  updateOnlineStatus = event => {
    const { onLine: payload } = navigator;
    const condition = payload ? "online" : "offline";
    this.register();
    this.store.dispatch({
      type: actions.status[condition],
      payload,
    });
  }

  render() {
    const validateUser = (nextState, replace, callback) => {
      const { user } = this.store.getState();
      if (user && !user.id) {
        const { location: { pathname: payload } } = nextState;
        this.store.dispatch({ type: actions.navigation.destination, payload });
        replace('/login');
      }
      callback();
    };

    return (
      <Provider store={this.store}>
        <Router history={this.history}>
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
