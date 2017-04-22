import React, { Component } from 'react';
import '../css/w3.css';

class EventPage extends Component {
    render() {
        return (
            <div>
                <h1 className="w3-xxlarge">Event Page : {this.props.params.eventId}</h1>
                <p>
                    Trigger an ajax call to load the related event from db using the given id.
                </p>
            </div>
        );
    }
}

export default EventPage;