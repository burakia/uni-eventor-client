import React, { Component } from 'react';
import SearchBar from '../component/SearchBar.jsx';
import EventCardSmall from '../component/EventCardSmall.jsx';
import EventCardMedium from '../component/EventCardMedium.jsx';
import '../css/w3.css';
import Slider from 'react-image-slider';


class HomePage extends Component {

    render() {
        
        const images = [
           // 'http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg',
           // 'http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg'
           '../image/resim.jpg'
        ];
        return (
            <div>
                <div>
                    <Slider images={images} isInfinite delay={5000}>
                        {images.map((image, key) => <div key={key}><img src={image} /></div>)}
                    </Slider>
                </div>
                <SearchBar />
                <br />
                <div className="w3-content">
                    <div className="w3-container"><h2>İlginizi Çekebilecek Etkinlikler</h2></div>

                    <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                        title="Event S 1" id="1" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/themes/canvaabout/img/about/carousel/menu@2x.jpg"
                        title="Event S 2" id="2" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/themes/canvaabout/img/about/carousel/a4@2x.jpg"
                        title="Event S 3" id="3" />
                    <EventCardSmall poster="https://about.canva.com/wp-content/themes/canvaabout/img/about/carousel/poster@2x.jpg"
                        title="Event S 4" id="4" />
                    <div className="w3-container"><h2>Öne Çıkan Etkinlikler</h2></div>
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                        title="Event M 1" id="5" />
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                        title="Event M 2" id="6" />
                    <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                        title="Event M 3" id="m3" />
                </div>
            </div>
        );
    }
}

export default HomePage;