import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Menu from 'components/menu/Menu';
import MenuItem from 'components/menu/Item';
import { mapMenuDispatchToProps } from 'api/actions';

class Toolbar extends Component {

  updateProfile = () => {
    window.FB.login((response) => {
      if (response.status === 'connected') {
        window.FB.api('/me', {fields: 'name,email,picture.type(large)'}, user => (this.props.updateFacebook(user)));
      }
    }, {scope: 'public_profile,email'});
  }

  render() {
    const { user, logout } = this.props;
    const logo = `${process.env.PUBLIC_URL}/images/jjt.png`;
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            <img src={logo} alt="logo" className="logo" />
          </span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="/search">
              <i className="material-icons">map</i>
              Mapa
            </Link>
            <Link className="mdl-navigation__link" to="/training">
              <i className="material-icons">local_play</i>
              Treinos
            </Link>
          </nav>
          <div className="mdl-layout-spacer"></div>
          <Menu user={user}>
            <MenuItem text="Facebook" onClick={this.updateProfile} />
            <MenuItem text="Logout" onClick={logout} />
          </Menu>
        </div>
      </header>
    );
  }
}

export default connect(({ user }) => ({ user }), mapMenuDispatchToProps)(Toolbar);
