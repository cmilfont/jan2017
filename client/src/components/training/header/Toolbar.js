import React from 'react';
import { connect } from 'react-redux';
import { mapTrainingDispatchToProps } from 'api/actions';
import Button from 'components/fields/Button';

export const Toolbar = ({ user, training, editable, cancel, edit }) => {

  if (training.Instructor.User.id !== user.id) {
    return (<div />);
  }

  const onCancel = () => (cancel({ id: training.id }));
  const onEdit = () => (edit(training));

  return (editable.id) ? (
    <div className="toolbar">
      <Button name="save" className="" label="Save" />
      <Button name="cancel" disabled={true} label="Cancelar" />
    </div>
  ) : (
    <div className="toolbar">
      <Button name="edit" className="" label="Editar" onClick={onEdit} />
      <Button name="cancel" className="danger" label="Cancelar" onClick={onCancel} />
    </div>
  );
};

export default connect(({ user, training, editable }) => ({ user, training, editable }), mapTrainingDispatchToProps)(Toolbar);
