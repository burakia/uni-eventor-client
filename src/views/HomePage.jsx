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
        var interests = [
            {
                id: 'id1',
                text: 'interest1'
            },
            {
                id: 'id2',
                text: 'interest2'
            },
            {
                id: 'id3',
                text: 'interest3'
            },
            {
                id: 'id4',
                text: 'interest4'
            }
        ];
        return (
            <div>
                <div id="slider" className="w3-gray" style={sliderStyle}>
                    <div className="w3-content">
                    <h1 className="w3-xxlarge">Slider</h1>
                    </div>
                </div>
                <SearchBar />
                <br />
                <select>
                       {interests.map(function(object , i ){
                       return <option key={object.id} value={object.text}>{object.text}</option>
                                         
                     })} 
                </select>
                
                <div className="w3-content">
                    <div className="w3-container"><h2>Event Card Small</h2></div>
                    
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 1" id="s1" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 2" id="s2" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 3" id="s3" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 4" id="s4" />
                    <div className="w3-container"><h2>Event Card Medium</h2></div>
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event M 1" id="s1" />
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event M 2" id="m2" />
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event M 3" id="m3" />
                </div>
                
            </div>
        );
    }
}

export default HomePage;