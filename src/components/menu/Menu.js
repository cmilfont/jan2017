import React, { Component } from 'react';

class Menu extends Component {

  state = {
    className: '',
    isVisible: false,
  }

  togglePopover = ({ target }) => {
    const { isVisible: oldVisible } = this.state;
    const isVisible = !oldVisible;
    const className = (isVisible) ? 'is-visible': '';
    this.setState({ isVisible, className });
  }

  render() {
    const { className, isVisible } = this.state;
    const { children } = this.props;
    const items = children || [];

    const containerClassName = `mdl-menu__container is-upgraded ${className}`;

    const style = {
      clip: (isVisible) ? 'rect(0px 148.312px 208px 0px)' : 'rect(0px 0px 0px 0px)',
    };

    return (
      <div className="menu">
        <button
          id="menu-profile"
          className="mdl-button mdl-button--icon"
          onClick={this.togglePopover}
        >
          <i className="material-icons">account_box</i>
        </button>;
        <div className={containerClassName}>
          <div className="mdl-menu__outline mdl-menu--bottom-right"></div>
          <ul
            className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
            htmlFor="menu-profile"
            style={style}
          >
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
