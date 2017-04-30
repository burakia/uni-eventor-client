import React, { Component } from 'react';
import EventCardProfile from '../component/EventCardProfile.jsx';
import EventCoomingUp from '../component/EventCoomingUp.jsx';
import EventUsers from '../component/EventUsers.jsx';
import '../css/w3.css';
import '../css/w3-theme-black.css';

class EventPage extends Component {
    
   handleClick =(e,cityName)=>{
      // e burada click icin bildigimiz event nesnesi
        var i, x, tablinks;
            x = document.getElementsByClassName("city");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < x.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
            }
            document.getElementById(e).style.display = "block";
            cityName.currentTarget.firstElementChild.className += " w3-border-red";
      
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
                                                    <a href="javascript:void(0)" onClick={(e) => this.handleClick('Icerik')}>
                                                        <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">İçerik</div>
                                                    </a>
                                                    <a href="javascript:void(0)" onClick={(e) => this.handleClick('Harita')}>
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
                    <EventUsers/>
                 </div>
            </div>
        );
    }
}

export default EventPage;