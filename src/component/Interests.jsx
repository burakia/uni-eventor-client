import React, { Component } from 'react';
import '../css/w3.css';


class Interests extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
        return (
<<<<<<< HEAD
			<div className="w3-card-2 w3-round w3-white w3-hide-small">
				<div className="w3-container">
					<h4 className="w3-center">Interests</h4>
				</div>
			</div>
=======
            <div className="w3-padding">
                <div className="w3-card-2 w3-round w3-white w3-hide-small">
                    <div className="w3-container">
                        <h4 className="w3-center">Interests</h4>
                    </div>
                </div>
            </div>
>>>>>>> origin/master
        );
    }
}

export default Interests;