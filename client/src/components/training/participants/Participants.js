import React, { Component } from 'react';
import Participant from 'components/training/participants/Participant';

class Participants extends Component {

  buildList = () => {
    const { training, user } = this.props;
    const owner = (user.id === training.Instructor.User.id);
    return training.Participants.filter(participant => (training.Instructor.User.id !== participant.User.id)).map(participant => {
      const key = `participant-${participant.User.id}`;
      return (
        <div key={key} className="mdl-cell mdl-cell--6-col">
          <Participant canceled={training.canceled} TrainingId={training.id} participant={participant} owner={owner} />
        </div>
      );
    });
  }

  render() {

    const { training } = this.props;
    const participants = (training.id) ? this.buildList() : '';

    return (
      <div className="training-participants">
        <div className="mdl-grid">
          {participants}
        </div>
      </div>
    );
  }
}

export default Participants;
