import React, { Component } from 'react';
import '../css/w3.css';
import ProfilePhoto from '../component/ProfilePhoto.jsx';
import Accordion from '../component/Accordion.jsx';
import Interests from '../component/Interests.jsx';
import EventCardSmall from '../component/EventCardSmall.jsx';

class Profile extends Component {
    render() {
        var pageStyle = {
            paddingTop: '50px'
        };
        return (
            <div className="w3-row" style={pageStyle}>
                <div className="w3-col m2">
                    <ProfilePhoto image="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png" imgAlt="John Doe" fullname="John Doe" />
                    <Accordion />
                    <Interests />
                </div>
                <div className="w3-col m8 w3-padding">
                    <div className="w3-row">
                        <div className="w3-row w3-container">
                            <h2>Events I Attended</h2>
                        </div>
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 1" id="s1" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 2" id="s2" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 3" id="s3" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 4" id="s4" />
                    </div>
                </div>
                <div className="w3-col m2">
                    <Interests />
                </div>
            </div>

        );
    }
}

export default Profile;