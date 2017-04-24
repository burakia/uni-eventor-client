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
			<div className="w3-card-2 w3-round w3-white">
				<div className="w3-container">
					<h4 className="w3-center">ProfilePhoto</h4>
                        <p className="w3-center">
                            <img src="https://igx.4sqi.net/img/user/original/24201968-2QZB3PZRUG25MXZK.jpg"  width="150px" height="150px"/>
                        </p>
                        <hr></hr>
                         <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>.Job </p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>City</p>
                 </div>
			</div>
        );
    }
}

export default ProfilePhoto;