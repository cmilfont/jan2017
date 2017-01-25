import React, { Component } from 'react';
import Button from 'components/fields/Button';

class Dismiss extends Component {

  disabled = () => {
    const { training, user: { id: userId, name } } = this.props;

    if (!training.id) {
      return true;
    } else if (!name) {
      return true;
    }

    if (training.Participants) {
      const participant = training.Participants.find(participant => (participant.User.id === userId));
      if (participant && participant.status) {
        return true;
      }
    }

    if (
      training.Participants &&
      !training.Participants.find(participant => (participant.User.id === userId))
    ) {
      return true;
    }

    return (training.id && training.Instructor.User.id === userId);
  }

  render() {

    const { dismiss } = this.props;
    const disabled = this.disabled();

    return (
      <Button name="dismiss" disabled={disabled} label="Desistir" onClick={dismiss} />
    );
  }
}

export default Dismiss;
