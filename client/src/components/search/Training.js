import React, { Component } from 'react';
import moment from 'moment';

class Training extends Component {

  render() {

    const { goToTraining, id, team, style, date, Instructor: { User: { name: instructor } } } = this.props;
    const hour = moment(date).format('lll');

    return (
      <div className="training__hour">
        <a data-id={id} ref="/" onClick={goToTraining}>{team} - {style} - {hour} - {instructor}</a>
      </div>
    );
  }
}

export default Training;