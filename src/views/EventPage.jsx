import React, { Component } from 'react';
import EventCardProfile from '../component/EventCardProfile.jsx';
import EventCoomingUp from '../component/EventCoomingUp.jsx';
import '../css/w3.css';
import '../css/w3-theme-black.css';

class EventPage extends Component {
   handleClick =(e,cityName)=>{
      // e burada click icin bildigimiz event nesnesi
      alert('adsf');
    }
    render() {
        
        return (
            <div className="w3-row">
                <div className="w3-col m3">
                     <EventCardProfile poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 1" id="s1" />
                     <div class="w3-card-2 w3-round">
                        Accordion
                    </div>
                     <div className="w3-card-2 w3-round w3-white w3-hide-small">
                        <div className="w3-container">
                            <div className="w3-row-padding">
                                <div className="w3-col s3">
                                    <p>Interests</p>
                                </div>
                                
                            </div>
                            <p>
                            
                                        <span className="w3-tag w3-small w3-theme-d5">@interests.Title</span>
                                
                                    <span className="w3-tag w3-small @theme">@Model.Interests.ElementAt(i).Title</span>
                                
                            </p>
                        </div>
                    </div>
                </div>
                 <div className="w3-col m7">
                        <div className="w3-row-padding">
                                <div className="w3-col m12">
                                       <div className="w3-card-2 w3-round w3-white">
                                          <div className="w3-container w3-padding">
                                           
                                                <h4 >Saü Bilişim Günleri</h4>
                                                <div className="w3-row">
                                                    <a href="javascript:void(0)" onClick={(e) => this.handleClick.bind(this,'Icerik')}>
                                                        <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">İçerik</div>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={(e) => this.handleClick.bind(this,'Harita')}>
                                                        <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">Harita</div>
                                                    </a>
                                                </div>
                                                
                                             </div>
                                      </div>
                                </div>
                         </div>
                 </div>
                 <div className="w3-col m2">
                    <EventCoomingUp poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                                    title="Event S 1" id="s2" />
                     <div className="w3-card-2 w3-round w3-white w3-center">
                        <div className="w3-container">
                            <p>Bu Etkinliğe Gidenler</p>
                               <span>Jane Doe</span>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default EventPage;