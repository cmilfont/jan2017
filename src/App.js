import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, IndexRedirect, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import Base from 'Base';
import Map from 'components/search/Search';
import Training from 'components/training/Wrapper';
import './css/App.css';

import middeware from 'api/middleware';
import gyms from 'api/reducers/gyms';

class App extends Component {

  render() {

    const reducers = {
      routing: routerReducer,
      gyms,
      count: (state = 0, action) => {
        if (action.type === 'JJTEAM_SEARCH_REQUEST_SUCCESS') {
          return action.payload.length;
        }
        return state;
      }
    };

    const middlewares = [ routerMiddleware(browserHistory), middeware ];

    const store = createStore(combineReducers(reducers), compose(applyMiddleware(...middlewares)));

    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store} >
        <Router history={history}>
          <Route path="/" component={Base}>
            <IndexRedirect to="/search" />
            <Route path="training" component={Training}/>
            <Route path="search" component={Map}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
