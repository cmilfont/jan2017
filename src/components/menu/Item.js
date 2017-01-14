import React, { Component } from 'react';

class Item extends Component {

  render() {
    const { text, onClick } = this.props;
    return (
      <li className="mdl-menu__item" onClick={onClick}>{text}</li>
    );
  }
}

export default Item;