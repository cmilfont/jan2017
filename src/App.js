import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, IndexRedirect, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import Base from 'Base';
import Map from 'components/search/Search';
import Training from 'components/training/Wrapper';
import './css/App.css';

const data = [{"id":1,"lat":"-3.7345753","lng":"-38.4697248","description":"Academia Central do Corpo Dunas","address":"Av. Luís Viêira, 920 - Vicente Pinzon, Fortaleza - CE, 60177-250","tel":"(85) 2181-1715","site":"http://centraldocorpo.com.br","createdAt":"2017-01-11T12:42:11.018Z","updatedAt":"2017-01-11T12:42:11.018Z","Trainings":[{"id":4,"team":"RGT","style":"Luta Livre Brunocilla","date":"2017-01-14T14:49:54.514Z","Instructor":{"id":1,"User":{"id":1,"name":"Christiano Martins Milfont de Almeida"}}},{"id":5,"team":"RGT","style":"Luta Livre Brunocilla","date":"2017-01-14T15:50:00.589Z","Instructor":{"id":1,"User":{"id":1,"name":"Christiano Martins Milfont de Almeida"}}}],"Instructors":[{"id":1,"UserId":1}]},{"id":2,"lat":"-3.8286273","lng":"-38.4902006","description":"Academia O-Positivo","address":"Rua Cesário Lange, 745 - Messejana, Fortaleza - CE","tel":"","site":"","createdAt":"2017-01-13T16:27:13.520Z","updatedAt":"2017-01-13T16:27:13.520Z","Trainings":[],"Instructors":[]}];

class App extends Component {

  render() {

    const reducers = {
      routing: routerReducer,
      gyms: (state = data, action) => {

        console.log(action.type, action.payload);
        if (action.type === 'JJTEAM_SEARCH_REQUEST_SUCCESS') {
          return action.payload;
        }

        return state;
      }
    };

    const middlewares = [ routerMiddleware(browserHistory) ];

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
