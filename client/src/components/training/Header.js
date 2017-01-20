import React, { Component } from 'react';
import moment from 'moment';
import 'moment-timezone';
import Button from 'components/fields/Button';

class Header extends Component {

  cancel = () => {
    const { cancel, training: { id } } = this.props;
    cancel({ id });
  }

  render() {

    const {
      user: { id: userId },
      training: {
        Gym: { description },
        style,
        team,
        date,
        Instructor: {
          User: { id: instructorId, name, imageUrl }
        }
      }
    } = this.props;

    const formattedDate = moment(date).tz('America/Fortaleza');
    const hour = formattedDate.format('HH:mm');
    const dateTz = formattedDate.format('DD/MM/YYYY');

    const cancelButton = (userId === instructorId) ?
      <Button name="cancel" className="danger" label="Cancelar" onClick={this.cancel} />: '';

    return (
      <div className="training-header">
        <div className="training-header__title">
          <h2 className="training-header__title-text">{description}</h2>
          <h3 className="training-header__title-text">{team}-{style}</h3>
          <h4 className="training-header__title-text">{dateTz}<br/>{hour}</h4>
        </div>
        <div className="training-header__instructor">
          <div className="training-header__instructor-image">
            <img alt="Instructor avatar" src={imageUrl} />
          </div>
          <div className="training-header__instructor-name">
            <p className="instructor">Instrutor</p>
            <p>{name}</p>
            <div className="toolbar">
              {cancelButton}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;