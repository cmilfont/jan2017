import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import FormContainer from 'components/fields/Form.js';
import TextField from 'components/fields/TextField.js';

const Schedule = ({ date, editable }) => {

  const formattedDate = moment(date).tz('America/Fortaleza');
  const hour = formattedDate.format('HH:mm');
  const dateTz = formattedDate.format('DD/MM/YYYY');
  let formContainer;

  const show = (editable.id) ?
  <FormContainer ref={(form) => { formContainer = form; }}>
      <div className="">
        <TextField
          type="text"
          labelName="Data"
          name="date"
        />
        <TextField
          type="text"
          labelName="Hora"
          name="hour"
        />
      </div>
    </FormContainer> :
  <h4 className="training-header__title-text">{dateTz}<br/>{hour}</h4>;

  return (
    show
  );
}

export default Schedule;
