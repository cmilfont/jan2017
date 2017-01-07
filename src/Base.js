import React from 'react';
import { Link } from 'react-router';

class Base extends React.Component {
  render() {
    const { children, count } = this.props;
    return (
      <div className="App">
        <div className="menu">
          <Link to="/training"> Training </Link>
          <Link to="/search"> Search </Link>
          <div className="material-icons mdl-badge mdl-badge--overlap" data-badge={count}>account_box</div>
        </div>
        {children}
      </div>
    );
  }
}

export default Base;