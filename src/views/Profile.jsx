import React, { Component } from 'react';
import '../css/w3.css';
import ProfilePhoto from '../component/ProfilePhoto.jsx';
import Accordion from '../component/Accordion.jsx';
import Interests from '../component/Interests.jsx';

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
				
			</div>
		</div>
		
        );
    }
}

export default Profile;