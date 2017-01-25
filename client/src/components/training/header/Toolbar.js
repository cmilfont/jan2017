import React from 'react';
import { connect } from 'react-redux';
import { mapTrainingDispatchToProps } from 'api/actions';
import Button from 'components/fields/Button';

export const Toolbar = ({ user, training, editable, save, onCancel, onEdit }) => {

  if (training.canceled) {
    return (<div className="canceled">CANCELADO</div>);
  }

  if (training.Instructor.User.id !== user.id) {
    return (<div />);
  }

  return (editable.id) ? (
    <div className="toolbar">
      <Button name="save" label="Save" onClick={save} />
      <Button name="cancel" disabled={true} label="Cancelar" />
    </div>
  ) : (
    <div className="toolbar">
      <Button name="edit" className="" label="Editar" onClick={onEdit} />
      <Button name="cancel" className="danger" label="Cancelar" onClick={onCancel} />
    </div>
  );
};

export default connect(({ user, training, editable }) => ({ user, training, editable }), mapTrainingDispatchToProps, (stateProps, dispatchProps, ownProps) => {
  return Object.assign(stateProps, dispatchProps, ownProps, {
    onEdit:   () => (dispatchProps.edit(stateProps.training)),
    onCancel: () => (dispatchProps.cancel({ id: stateProps.training.id }))
  })
}
)(Toolbar);
