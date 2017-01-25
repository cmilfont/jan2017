import React from 'react';
import { connect } from 'react-redux';
import Status from 'components/training/participants/Status';
import { mapTrainingDispatchToProps } from 'api/actions';

class Participant extends React.Component {

  approve = () => {
    const { approve, participant: { id: ParticipantId }, TrainingId } = this.props;
    approve({ TrainingId, ParticipantId });
  }

  render() {
    const { participant: { status, User: { imageUrl, name } }, owner, canceled } = this.props;

    const cardTitleStyle = {
        background: `url('${imageUrl}') center / cover`,
    };

    return (
      <div className="mdl-card">
        <div className="mdl-card__title" style={cardTitleStyle} />
        <div className="mdl-card__supporting-text">{name}</div>
        <Status canceled={canceled} owner={owner} status={status} approve={this.approve} />
      </div>
    );
  }
}

export default connect(null, mapTrainingDispatchToProps)(Participant);
