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
                        <p class="w3-center">
                            <img src="/details/img/myImage.png" />
                        </p>
                        <hr></hr>
                         <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>.Job </p>
                    <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>City</p>
                 </div>
			</div>
        );
    }
}

export default ProfilePhoto;