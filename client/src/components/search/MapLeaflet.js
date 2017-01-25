import React, { Component } from 'react';
import { Map, TileLayer, LayersControl, LayerGroup } from 'react-leaflet';
import { GoogleLayer } from 'react-leaflet-google';
import Gym from 'components/search/Gym';
//import ButtonControl from 'components/search/ButtonControl';

class MapLeaflet extends Component {

  componentDidUpdate() {
    const { gyms } = this.props;
    const bounds = gyms.map(({lat, lng}) => ([lat, lng]));
    this.map.leafletElement.fitBounds(bounds);
  }

  componentDidMount() {
    this.map.leafletElement.on('dblclick', this.addGym);
  }

  addGym = (event) => {
    console.log(event.latlng);
  }

  render() {
    const { BaseLayer} = LayersControl;
    const key = 'AIzaSyCihQHbEvRB7Q11Zj4lUyQSrospvp430rU';
    const terrain = 'TERRAIN';
    const road = 'ROADMAP';
    const satellite = 'SATELLITE';
    const { gyms } = this.props;
    const places = gyms.map(gym => (<Gym key={`gym-${gym.id}`} gym={gym} />));

    /*
    <ButtonControl className="add-location" position='topright'>
      <i className="material-icons">add_location</i>
    </ButtonControl>
    */

    return (
      <Map doubleClickZoom={false} center={[-3.7345753, -38.4697248]} ref={map => (this.map = map)} zoom={16} zoomControl={true}>
        <LayerGroup>
          {places}
        </LayerGroup>
        <LayersControl position='topright'>
          <BaseLayer  name='Open Street Map Mapnik'>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
          </BaseLayer>
          <BaseLayer checked name='Google Maps Roads'>
            <GoogleLayer googlekey={key}  maptype={road}/>
          </BaseLayer>
          <BaseLayer  name='Google Maps Terrain'>
            <GoogleLayer googlekey={key}  maptype={terrain} />
          </BaseLayer>
          <BaseLayer  name='Google Maps Satellite'>
            <GoogleLayer googlekey={key}  maptype={satellite} />
          </BaseLayer>
        </LayersControl>
      </Map>
    );
  }
}

export default MapLeaflet;
