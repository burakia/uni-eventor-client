import React, { Component } from 'react';
import '../css/w3.css';


class ProfilePhoto extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
        var s = {
            width: '50px'
        };
        return (
			<div class="w3-card-2 w3-round w3-white">
				<div class="w3-container">
					<h4 class="w3-center">ProfilePhoto</h4>
					
				</div>
			</div>
        );
    }
}

export default ProfilePhoto;