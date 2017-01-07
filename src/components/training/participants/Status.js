import React, { Component } from 'react';

class Status extends Component {
  render() {

    const { owner } = this.props;
    const button = (owner) ?
      <button className="mdl-button mdl-button--raised mdl-button--colored">
        Aprovar
      </button> : null;

    return (
      <div className="status">
        <div>Pendente</div>
        {button}
      </div>
    )
  }
}

export default Status;