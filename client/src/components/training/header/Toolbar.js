import React from 'react';
import Button from 'components/fields/Button';

export default ({ cancel }) => {

  return (
    <div className="toolbar">
      <Button name="edit" className="" label="Editar" />
      <Button name="cancel" className="danger" label="Cancelar" onClick={cancel} />
    </div>
  );
};
