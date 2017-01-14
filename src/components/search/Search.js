import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, LayersControl, LayerGroup  } from 'react-leaflet';
import { GoogleLayer } from 'react-leaflet-google';
import Gym from 'components/search/Gym';

class Search extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'JJTEAM_SEARCH_REQUEST'
    });
  }

  componentDidUpdate() {
    const { gyms } = this.props;
    const bounds = gyms.map(({lat, lng}) => ([lat, lng]));
    this.map.leafletElement.fitBounds(bounds);
  }

  mapMarkers = (marker) => (
    <Gym key={`gym-${marker.id}`} marker={marker} />
  )

  render() {
    const key = 'AIzaSyCihQHbEvRB7Q11Zj4lUyQSrospvp430rU';
    const { BaseLayer} = LayersControl;
    const terrain = 'TERRAIN';
    const road = 'ROADMAP';
    const satellite = 'SATELLITE';
    
    const pins = this.props.gyms.map(this.mapMarkers)

    return (
      <div className="search">
        <Map center={[-3.7345753, -38.4697248]} ref={map => (this.map = map)} zoom={16} zoomControl={true}>
          <LayerGroup>
            {pins}
          </LayerGroup>
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

function mapStateToProps(state) {

  return {
    gyms: state.gyms
  }
}

const wrapper = connect(mapStateToProps);

export default wrapper(Search);