import React, { Component } from 'react';
import '../css/w3.css';
import ProfilePhoto from '../component/ProfilePhoto.jsx';
import Accordion from '../component/Accordion.jsx';
import Interests from '../component/Interests.jsx';
import EventCardSmall from '../component/EventCardSmall.jsx';
class Profile extends Component {
    render() {
        return (
		<div class="w3-row">
            <div class="w3-col m3">
                <ProfilePhoto />
				<Accordion />
				<Interests />
            </div>
			<div class="w3-col m7">
				  <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 1" id="s1" />
                  <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 2" id="s2" />
                   <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 3" id="s3" />
                   <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 4" id="s4" />
			</div>
            <div class="w3-col m2">
                    <Interests />
            </div>
		</div>
		
        );
    }
}

export default Profile;