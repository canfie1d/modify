import React from 'react';
import ReactMapboxGl, { Marker, ZoomControl } from "react-mapbox-gl";
import MODIFY_LOGO from '../Assets/Images/modify_icon.png';

export default class Map extends React.Component {
  renderMap() {
    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
      scrollZoom: false
    });

    return (
      <Map
        className='map'
        style={this.props.mapStyles}
        zoom={this.props.zoom}
        center={this.props.center}
      >
        <Marker coordinates={this.props.center} anchor="bottom">
          <img className='map__pin' src={MODIFY_LOGO} alt='' />
        </Marker>
        <ZoomControl />
      </Map>
    );
  }

  render() {
    return this.renderMap();
  }
}
