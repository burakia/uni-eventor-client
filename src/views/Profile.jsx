import React, { Component } from 'react';
import '../css/w3.css';
import ProfilePhoto from '../component/ProfilePhoto.jsx';
import Accordion from '../component/Accordion.jsx';
import Interests from '../component/Interests.jsx';
import EventCardSmall from '../component/EventCardSmall.jsx';
import CommingUpEvent from '../component/CommingUpEvent.jsx';

class Profile extends Component {
    render() {
        return (
		<div className="w3-row">
            <div className="w3-col m3">
                <ProfilePhoto />
				<Accordion />
				<Interests />
            </div>
			<div className="w3-col m7">
				  <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 1" id="s1" />
                  <EventCardSmall poster="http://www.arifacar.com/wp-content/uploads/23675_354733846872_756016872_4713984_6682828_n.jpg"
                                    title="Event S 2" id="s2" />
                   <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 3" id="s3" />
                   <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 4" id="s4" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 4" id="s5" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 4" id="s6" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 4" id="s7" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 4" id="s8" />
			</div>
            <div className="w3-col m2">
                    <CommingUpEvent poster="http://comp.eng.ankara.edu.tr/files/2014/03/intro.jpg" title="Event S 1" id="s1" />
            </div>
		</div>
		
        );
    }
}

export default Profile;