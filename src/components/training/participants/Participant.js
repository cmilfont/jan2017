import React, { Component } from 'react';
import Container from './Container';
import Status from './Status';

class Participant extends Component {
  render() {
    const {
      dispatch,
      participant: { id, status },
      owner
    } = this.props;

    const statusComponent = (status)?
      null :
      <Status
        owner={owner}
        dispatch={dispatch}
        participantId={id}
      />;

    return (
      <Container {...this.props}>
        {statusComponent}
      </Container>
    );
  }
}

export default Participant;