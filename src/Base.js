import React from 'react';
import { connect } from 'react-redux';
import Toolbar from 'components/menu/Toolbar';

class Base extends React.Component {
  render() {
    const { children, count } = this.props;

    return (
      <div className="mdl-layout mdl-layout--fixed-header">
        <Toolbar />
        <main className="mdl-layout__content">
          {children}
        </main>
      </div>
    );
  }
}

export default connect(({ count }) => ({ count }))(Base);