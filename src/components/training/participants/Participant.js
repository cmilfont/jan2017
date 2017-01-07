import React, { Component } from 'react';
import Container from './Container';
import Status from './Status';

class Participant extends Component {
  render() {
    const { status, owner } = this.props.participant;

    const statusComponent = (status)?
      null :
      <Status owner={owner} />;

    return (
      <Container {...this.props}>
        {statusComponent}
      </Container>
    );
  }
}

export default Participant;