import React from 'react';
import { connect } from 'react-redux';
import { mapTrainingDispatchToProps } from 'api/actions';

import moment from 'moment';
import 'moment-timezone';
import TextField from 'components/fields/TextField.js';

const Schedule = ({ training, editable, update }) => {

  if (editable.id) {
    const formattedDate = moment(editable.date).tz('America/Fortaleza');

    const onChange = ({ target: { name, value } }) => {
      update({
        [name]: value,
      });
    }

    return <div className="gym-create-training">
      <TextField
        value={String(formattedDate.get('hour'))}
        type="text"
        labelName="Hora"
        name="hours"
        onChange={onChange}
      />
      <TextField
        value={String(formattedDate.get('minutes'))}
        type="text"
        labelName="Minuto"
        name="minutes"
        onChange={onChange}
      />
  </div>;
  } else {
    const formattedDate = moment(training.date).tz('America/Fortaleza');
    const hour = formattedDate.format('HH:mm');
    const dateTz = formattedDate.format('DD/MM/YYYY');
    return (<h4 className="training-header__title-text">{dateTz}<br/>{hour}</h4>);
  }

}

export default connect(({ user, training, editable }) => ({ user, training, editable }), mapTrainingDispatchToProps)(Schedule);
