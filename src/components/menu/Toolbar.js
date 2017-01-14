import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Menu from 'components/menu/Menu';
import MenuItem from 'components/menu/Item';

class Toolbar extends Component {

  updateProfile = () => {
    debugger;
  }

  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">RGT</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="/search"> Search </Link>
            <Link className="mdl-navigation__link" to="/training"> Training </Link>
          </nav>
          <div className="mdl-layout-spacer"></div>
          <Menu>
            <MenuItem text="Get Facebook data" onClick={this.updateProfile} />
            <MenuItem text="Logout"  />
          </Menu>
        </div>
      </header>
    );
  }
}

export default Toolbar;