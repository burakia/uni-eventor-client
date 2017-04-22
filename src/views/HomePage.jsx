import React, { Component } from 'react';
import SearchBar from '../component/SearchBar.jsx';
import EventCardSmall from '../component/EventCardSmall.jsx';
import EventCardMedium from '../component/EventCardMedium.jsx';
import '../css/w3.css';

class HomePage extends Component {
    render() {
        var sliderStyle = {
            width: '%100',
            height: '400px'
        };
        return (
            <div>
                <div id="slider" className="w3-gray" style={sliderStyle}>
                    <div className="w3-content">
                    <h1 className="w3-xxlarge">Slider</h1>
                    </div>
                </div>
                <SearchBar />
                <br />
                
                <div className="w3-content">
                    <h2>Event Card Small</h2>
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Lorem Ipsum" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Lorem Ipsum" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Lorem Ipsum" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Lorem Ipsum" />
                    <h2>Event Card Medium</h2>
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Lorem Ipsum" />
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Lorem Ipsum" />
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Lorem Ipsum" />
                </div>
                
            </div>
        );
    }
}

export default HomePage;