import React, { Component, PropTypes } from 'react';
import Participant from 'components/training/Participant';

class Training extends React.Component {

  static contextTypes = {
    treinar: PropTypes.func.isRequired
  }

  render() {

    const { gym, team, style, date, hour, participants } = this.props.training;
    const list = participants.map(
      participant => (
        <Participant
          key={`participant-${participant.id}`}
          participant={participant}
        />)
    );

    return (
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{gym}</h2>
          <h3 className="mdl-card__title-text">{team}-{style}</h3>
          <h4>{date}<br/>{hour}</h4>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-grid">
            {list}
          </div>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <button
            onClick={this.context.treinar}
            className="mdl-button mdl-button--raised mdl-button--colored"
          >
            Treinar
          </button>
        </div>
      </div>
    );
  }
}

export default Training;