import React, { PropTypes, Component } from 'react';
import { Map, TileLayer, LayersControl, LayerGroup } from 'react-leaflet';
import { GoogleLayer } from 'react-leaflet-google';

class Search extends Component {

  render() {
    const key = 'AIzaSyCihQHbEvRB7Q11Zj4lUyQSrospvp430rU';
    const { BaseLayer} = LayersControl;
    const terrain = 'TERRAIN';
    const road = 'ROADMAP';
    const satellite = 'SATELLITE';

    return (
      <div>
        <Map center={[-3.7345753, -38.4697248]} ref={map => (this.map = map)} zoom={16} zoomControl={true}>
          <LayersControl position='topright'>
            <BaseLayer  name='Open Street Map Mapnik'>
              <TileLayer  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
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

      </div>
    );
  }
}

export default Search;