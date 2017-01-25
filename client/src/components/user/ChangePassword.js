import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Container from 'components/user/Container.js';
import { doChangeAction } from 'api/actions.js';
import mapStateToProps from 'components/user/mapStateToProps.js';

class ChangePassword extends Container {

  static propTypes = {
    params: PropTypes.shape({
      token: PropTypes.string,
    }),
  }

  componentDidMount() {
    const { params: { token } } = this.props;
    this.formContainer.setValues({ token });
  }

  createContainer() {
    return (
      <ul className="login-list mdl-list">
        {this.createFieldContainer('token', '', 'hidden')}
        <li className="mdl-list__item">
          {this.createFieldContainer('password', 'Password', 'password')}
        </li>
        <li className="mdl-list__item">
          <button onClick={this.doSubmit} type="button" className="mdl-button mdl-button--raised mdl-button--colored">
            Reset
          </button>
        </li>
      </ul>
    );
  }
}

export default connect(mapStateToProps, doChangeAction)(ChangePassword);
