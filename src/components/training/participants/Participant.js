import React, { Component } from 'react';
import Container from './Container';
import Status from './Status';

class Participant extends Component {
  render() {
    const {
      participant: { status },
      owner
    } = this.props;

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