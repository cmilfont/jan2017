import React, { Component } from 'react';

class Select extends Component {

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
        <input className="mdl-textfield__input" id="country" name="country" value="Belarus" type="text" readOnly tabIndex="-1" data-val="BLR"/>
        <label className="mdl-textfield__label" htmlFor="country">Country</label>
        <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu" htmlFor="country">
          <li className="mdl-menu__item" data-val="BLR">Belarus</li>
          <li className="mdl-menu__item" data-val="RUS">Russia</li>
        </ul>
      </div>
    );
  }
}

export default Select;