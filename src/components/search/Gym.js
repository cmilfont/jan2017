import React, { Component, PropTypes } from 'react';
import { Marker, Popup } from 'react-leaflet';

class Gym extends Component {


  render() {

    const { map, layerContainer, marker: { lat, lng } } = this.props;

    return (
      <Marker
        position={[Number(lat), Number(lng)]}
        map={map}
        layerContainer={layerContainer}
      />
    );
  }
}

export default Gym;