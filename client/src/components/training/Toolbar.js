import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapTrainingDispatchToProps } from 'api/actions';
import Button from 'components/fields/Button';
import Dismiss from 'components/training/Dismiss';

class Toolbar extends Component {

  apply = () => {
    const { apply, training: { id } } = this.props;
    apply({ id });
  }

  dismiss = () => {
    const { dismiss, training: { id } } = this.props;
    dismiss({ id });
  }

  makeAlert = () => {
    const { training, user: { id: userId, name } } = this.props;
    if (training.id && training.Instructor.User.id !== userId && !name) {
      return "Precisa atualizar foto e nome para solicitar participar do treino";
    }
    return '';
  }

  disabled = () => {
    const { training, user: { id: userId, name } } = this.props;

    if (!training.id) {
      return true;
    } else if (!name) {
      return true;
    }

    if (
      training.Participants &&
      training.Participants.find(participant => (participant.User.id === userId))
    ) {
      return true;
    }

    return (training.id && training.Instructor.User.id === userId);
  }


  ehTreinador = (training, user) => {
    return training.id && training.Instructor.User.id === user.id
  }

  foiCancelado = (training) => {
    return training.canceled;
  }
  render() {
    const { training, user } = this.props;
    const disabled = this.disabled();
    const message = this.makeAlert();

    return ( this.ehTreinador(training, user) || this.foiCancelado(training)) ?
      <div /> :
      <div className="training-toolbar mdl-cell--bottom">
        <Button name="apply" label="Participar" disabled={disabled} onClick={this.apply} />
        <Dismiss dismiss={this.dismiss} training={training} user={user} />
        <div className="message warning">{message}</div>
      </div>;
  }
}


export default connect(({ training, user }) => ({ training, user }), mapTrainingDispatchToProps)(Toolbar);
