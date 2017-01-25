import React from 'react';
import Button from 'components/fields/Button';

const Status = ({ owner, status, approve, canceled }) => {

  if (status || canceled) {
    return <div></div>;
  } else {
    const button = (owner) ? <Button label="Treinou" name="approve" onClick={approve} /> : null;
    return (
      <div className="mdl-card__actions mdl-card--border">
        {button}
        <div className="status-message warning">Pendente</div>
      </div>
    );
  }


};

export default Status;
