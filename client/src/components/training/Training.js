import React from 'react';
import { connect } from 'react-redux';
import { mapTrainingDispatchToProps } from 'api/actions';
import Header from 'components/training/header/Header';
import Disclaimer from 'components/training/Disclaimer';
import Participants from 'components/training/participants/Participants';
import Toolbar from 'components/training/Toolbar';

export class Training extends React.Component {

  componentDidMount() {
    const { params: { id }, request, verify } = this.props;
    if (id) {
      request({ id });
    } else {
      verify();
    }
  }

  render() {
    const { training } = this.props;

    const header = (training.id) ? <Header {...this.props} /> : <Disclaimer />;

    return (
      <main className="mdl-layout__content">
        <div className="training-container">
          <Toolbar />
          <div className="training">
            {header}
            <Participants {...this.props} />
          </div>
        </div>
      </main>
    );
  }
}

export default connect(({ training, user, editable }) => ({ training, user, editable }), mapTrainingDispatchToProps)(Training);
