import React from 'react';
import { Link } from 'react-router';

class Base extends React.Component {
  render() {
    const { children, count } = this.props;
    return (
      <div className="mdl-layout mdl-layout--fixed-header">
        <div className="menu">
          <Link to="/training"> Training </Link>
          <Link to="/search"> Search </Link>
          <div className="material-icons mdl-badge mdl-badge--overlap" data-badge={count}>account_box</div>

          <div > Academias: 0 </div>
        </div>
        <main className="mdl-layout__content">
          {children}
        </main>
      </div>
    );
  }
}

export default Base;