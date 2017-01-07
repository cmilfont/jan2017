import React, { Component, PropTypes } from 'react';
import Participant from 'components/training/participants/Participant';

class Training extends React.Component {

  render() {
    const {
      treinar,
      dispatch,
      user: { owner },
      training: { gym, team, image, style, date, hour, participants },
    } = this.props;

    const list = participants.map(
      participant => (
        <Participant
          key={`participant-${participant.id}`}
          participant={participant}
          owner={owner}
          dispatch={dispatch}
        />)
    );

    const styleCss = {
      background: `url('${image}') center / cover`,
    };

    const action = (owner) ? null :
      <div className="mdl-card__actions mdl-card--border">
        <button
          onClick={this.context.treinar}
          className="mdl-button mdl-button--raised mdl-button--colored"
        >
          Treinar
        </button>
      </div>;

    return (
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title" style={styleCss}>
          <h2 className="mdl-card__title-text">{gym}</h2>
          <h3 className="mdl-card__title-text">{team}-{style}</h3>
          <h4>{date}<br/>{hour}</h4>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-grid">
            {list}
          </div>
        </div>
        {action}
      </div>
    );
  }
}

export default Training;