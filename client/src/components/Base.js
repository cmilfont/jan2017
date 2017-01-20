import React, { Component } from 'react';
import Toolbar from 'components/menu/Toolbar';

class Base extends Component {
  render() {
    const { children } = this.props;
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

export default Base;