import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { MapControl } from 'react-leaflet';

class ButtonControl extends MapControl {

  componentWillMount() {
    const { position, children, className } = this.props;
    const centerControl = L.control({ position });
    const button = (<div className={className}>{children}</div>);

    centerControl.onAdd = function (map) {
      let div = L.DomUtil.create('div', '');
      ReactDOM.render(button, div);
      return div;
    };

    this.leafletElement = centerControl;
  }

}

export default ButtonControl;
