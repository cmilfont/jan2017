import React, { Component, PropTypes } from 'react';
import { Router, IndexRedirect, Route, browserHistory } from 'react-router'
import Base from 'Base';
import Map from 'components/search/Search';
import Training from 'components/training/Wrapper';
import './css/App.css';

class App extends Component {

  render() {

    return (
      <Router history={browserHistory}>
        <Route path="/" component={Base}>
          <IndexRedirect to="/search" />
          <Route path="training" component={Training}/>
          <Route path="search" component={Map}/>
        </Route>
      </Router>
    );
  }
}

export default App;
