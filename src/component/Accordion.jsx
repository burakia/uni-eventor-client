import React, { Component } from 'react';
import '../css/w3.css';


class Accordion extends Component {
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
			<div class="w3-card-2 w3-round">
				<div class="w3-accordion w3-white">
					<h4 class="w3-center">Accordion</h4>
				</div>
			</div>
        );
    }
}

export default Accordion;