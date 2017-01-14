import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Base extends React.Component {
  render() {
    const { children, gyms } = this.props;
    const count = gyms.length;
    return (
      <div className="mdl-layout mdl-layout--fixed-header">
        <div className="menu">
          <Link to="/training"> Training </Link>
          <Link to="/search"> Search </Link>
          <div className="material-icons mdl-badge mdl-badge--overlap" data-badge={count}>account_box</div>

          <div > Academias: {count} </div>
        </div>
        <main className="mdl-layout__content">
          {children}
        </main>
      </div>
    );
  }
}

export default connect( ({ gyms }) => ({ gyms }))(Base);