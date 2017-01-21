import React from 'react';
import moment from 'moment';
import 'moment-timezone';

export default ({ date, editable }) => {

  const formattedDate = moment(date).tz('America/Fortaleza');
  const hour = formattedDate.format('HH:mm');
  const dateTz = formattedDate.format('DD/MM/YYYY');

  return (
    <h4 className="training-header__title-text">{dateTz}<br/>{hour}</h4>
  );
}
