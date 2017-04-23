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
                <button onclick="myFunction('Demo1')" class="w3-btn-block w3-theme-l1 w3-left-align w3-hover-teal"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
                <div id="Demo1" class="w3-accordion-content w3-container">
                    <p>Some text..</p>asdf
                </div>
                <button onclick="myFunction('Demo2')" class="w3-btn-block w3-theme-l1 w3-left-align w3-hover-teal"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
                <div id="Demo2" class="w3-accordion-content w3-container">
                    <p>Some other text..</p>
                </div>
                <button onclick="myFunction('Demo3')" class="w3-btn-block w3-theme-l1 w3-left-align w3-hover-teal"><i class="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
                <div id="Demo3" class="w3-accordion-content w3-container">
                    <div class="w3-row-padding">
                        <br>
                        <div class="w3-half">
                            <img src="~/Content/img/lights.jpg" style="width:100%" class="w3-margin-bottom">
                        </div>
                        <div class="w3-half">
                            <img src="~/Content/img/nature.jpg" style="width:100%" class="w3-margin-bottom">
                        </div>
                        <div class="w3-half">
                            <img src="~/Content/img/mountains.jpg" style="width:100%" class="w3-margin-bottom">
                        </div>
                        <div class="w3-half">
                            <img src="~/Content/img/forest.jpg" style="width:100%" class="w3-margin-bottom">
                        </div>
                        <div class="w3-half">
                            <img src="~/Content/img/nature.jpg" style="width:100%" class="w3-margin-bottom">
                        </div>
                        <div class="w3-half">
                            <img src="~/Content/img/fjords.jpg" style="width:100%" class="w3-margin-bottom">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        );
    }
}

export default Accordion;