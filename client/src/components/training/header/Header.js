import React, { Component } from 'react';
import Toolbar from 'components/training/header/Toolbar';
import Schedule from 'components/training/header/Schedule';

class Header extends Component {

  render() {
    const {
      training: {
        Gym: { description },
        style,
        team,
        Instructor: {
          User: { name, imageUrl }
        }
      }
    } = this.props;

    return (
      <div className="training-header">
        <div className="training-header__title">
          <h2 className="training-header__title-text">{description}</h2>
          <h3 className="training-header__title-text">{team}-{style}</h3>
          <Schedule />
        </div>
        <div className="training-header__instructor">
          <div className="training-header__instructor-image">
            <img alt="Instructor avatar" src={imageUrl} />
          </div>
          <div className="training-header__instructor-name">
            <p className="instructor">Instrutor</p>
            <p>{name}</p>
            <Toolbar />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
