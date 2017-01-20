import React, { Component } from 'react';
import { debounce } from 'lodash';

class Menu extends Component {

  state = {
    className: '',
    isVisible: false,
    closing: false,
  }

  componentDidUpdate() {
    const { isVisible } = this.state;
    if (isVisible) {
      this.popover.focus();
    }
  }

  togglePopover = debounce(() => {
    const { closing } = this.state;
    if (closing) {
      this.setState({ closing: false });
    } else {
      this.setState({
        closing: false,
        isVisible: true,
        className: 'is-visible'
      });
    }
  }, 200)

  close = () => {
    this.setState({
      closing: true,
      isVisible: false,
      className: ''
    }, this.togglePopover);
  }

  render() {
    const { className, isVisible } = this.state;
    const { children, user } = this.props;
    const items = children || [];

    const containerClassName = `mdl-menu__container is-upgraded ${className}`;

    const style = {
      clip: (isVisible) ? 'rect(0px 148.312px 208px 0px)' : 'rect(0px 0px 0px 0px)',
    };

    const button = (user && (user.imageUrl)) ?
      <button
        id="menu-profile"
        className="mdl-chip"
        onClick={this.togglePopover}
      >
        <img role="presentation" className="mdl-chip__contact" src={user.imageUrl}></img>
      </button> :
      <button
        id="menu-profile"
        className="mdl-button mdl-button--icon"
        onClick={this.togglePopover}
      >
        <i className="material-icons">account_box</i>
      </button>;

    return (
      <div className="menu">
        {button}
        <div tabIndex="1"  ref={(popover) => { this.popover = popover; }} className={containerClassName} onBlur={this.close}>
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
