import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Button from 'components/fields/Button';
import FormContainer from 'components/fields/Form.js';
import TextField from 'components/fields/TextField.js';
import Training from 'components/search/Training';
import { mapTrainingDispatchToProps } from 'api/actions';

class Gym extends Component {

  goToTraining = ({ target: { dataset: { id } } }) => {
    this.props.goToTraining(push(`/training/${id}`));
  }

  criarTreino = () => {
    const { gym: { id: GymId }, create } = this.props;
    const { hours, minutes } = this.formContainer.getValues();
    create({ hours, minutes, GymId });
  }

  render() {

    const { map, layerContainer, gym, user, online } = this.props;
    const { lat, lng, description, address, tel, site, Trainings, Instructors } = gym;
    const hours = Trainings.map(training => (
      <Training
        key={`training-hour-${training.id}`}
        {...training}
        goToTraining={this.goToTraining}
      />
    ));

    const formContainer = (
      Instructors.find(instructor => (instructor.UserId === user.id)) &&
      online
    ) ?

    <FormContainer ref={(form) => { this.formContainer = form; }}>
      <div className="gym-create-training">
        <TextField
          type="text"
          labelName="Hora"
          name="hours"
        />
        <TextField
          type="text"
          labelName="Minuto"
          name="minutes"
        />
        <Button name="create" label="Criar Treino" onClick={this.criarTreino} />
      </div>
    </FormContainer> : '';

    return (
      <Marker
        position={[Number(lat), Number(lng)]}
        map={map}
        layerContainer={layerContainer}
      >
        <Popup>
          <div className="gym">
            <div className="training">{hours}</div>
            <div className="description">{description}</div>
            <div className="address">{address}</div>
            <div className="tel">{tel}</div>
            <div className="site">{site}</div>
            {formContainer}
          </div>
        </Popup>
      </Marker>
    );
  }
}

export default connect(({ user, online }) => ({ user, online }), mapTrainingDispatchToProps)(Gym);
