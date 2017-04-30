import React, { Component } from 'react';
import Map from 'google-maps-react'

class EventMapFrame extends Component {
    render() {
        var mapUrl ="https://maps.google.com/maps?q="+this.props.lat +","+this.props.lon+"&hl=es;z=14&amp;output=embed";
        return (
      <h2>Harita</h2>
      
        );
    }
}

export default EventMapFrame;