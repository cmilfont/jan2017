import React, { PropTypes, Component } from 'react';
import Training from 'components/training/Training';

class Wrapper extends Component {

  static contextTypes = {
    treinar: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }

  render() {
    const { treinar, dispatch, getState } = this.context;
    const { user, training } = getState();
    return (
      <Training
        user={user}
        training={training}
        dispatch={dispatch}
        treinar={treinar}
      />
    );
  }
}

export default Wrapper;