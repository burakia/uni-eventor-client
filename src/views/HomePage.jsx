import React, { Component } from 'react';
import SearchBar from '../component/SearchBar.jsx';
import '../css/w3.css';

class HomePage extends Component {
    render() {
        var cssClass="w3-gray";
        var sliderStyle = {
            width: '%100',
            height: '400px'
        };
        var content = 'w3-content';
        var fullWidth = {
            width: '100%'
        };
        return (
            <div>
                <div id="slider" className={cssClass} style={sliderStyle}>
                    <div className={content}>
                    <h1 className="w3-xxlarge">Slider</h1>
                    </div>
                </div>
                <SearchBar />
                <br />
                
                <div className={content}>
                    <div className="w3-quarter w3-container w3-margin-bottom">
                        <img src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png" alt="Norway" style={fullWidth} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                        </div>
                    </div>
                    <div className="w3-quarter w3-container w3-margin-bottom">
                        <img src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png" alt="Norway" style={fullWidth} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                        </div>
                    </div>
                    <div className="w3-quarter w3-container w3-margin-bottom">
                        <img src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png" alt="Norway" style={fullWidth} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                        </div>
                    </div>
                    <div className="w3-quarter w3-container w3-margin-bottom">
                        <img src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png" alt="Norway" style={fullWidth} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>Lorem Ipsum</b></p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default HomePage;