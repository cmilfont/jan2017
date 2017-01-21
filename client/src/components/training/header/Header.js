import React, { Component } from 'react';
import Toolbar from 'components/training/header/Toolbar';
import Schedule from 'components/training/header/Schedule';

class Header extends Component {

  cancel = () => {
    const { cancel, training: { id } } = this.props;
    cancel({ id });
  }

  render() {

    const {
      editable,
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

    const toolbar = (instructorId === userId) ? <Toolbar cancel={this.cancel} />: '';

    return (
      <div className="training-header">
        <div className="training-header__title">
          <h2 className="training-header__title-text">{description}</h2>
          <h3 className="training-header__title-text">{team}-{style}</h3>
          <Schedule date={date} editable={editable} />
        </div>
        <div className="training-header__instructor">
          <div className="training-header__instructor-image">
            <img alt="Instructor avatar" src={imageUrl} />
          </div>
          <div className="training-header__instructor-name">
            <p className="instructor">Instrutor</p>
            <p>{name}</p>
            {toolbar}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
