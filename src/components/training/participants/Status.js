import React, { Component } from 'react';

const Status = ({ owner, dispatch, participantId }) => {

  const onClick = event => {
    event.preventDefault();
    dispatch(participantId);
  };

  const button = (owner) ?
    <button
      onClick={onClick}
      className="mdl-button mdl-button--raised mdl-button--colored">
      Aprovar
    </button> : null;

  return (
    <div className="status">
      <div>Pendente</div>
      {button}
    </div>
  );
};

export default Status;