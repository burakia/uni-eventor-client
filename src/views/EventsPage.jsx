import React, { Component } from 'react';
import '../css/w3.css';
import EventCardSmall from '../component/EventCardSmall.jsx';
import EventCardMedium from '../component/EventCardMedium.jsx';
import SearchBar from '../component/SearchBar.jsx';
import axios from 'axios';

class EventsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            universities: [],
            faculties: [],
            EventTypes: [],
            EventInterests: [],
            FkFacultyId: ''
        };
    }
 handleUniversityIdChange(event) {
        
        var UniversityId = event.target.value;
         axios.get('http://unieventorapi.azurewebsites.net/api/FacultyApi?UniId='+UniversityId).then((response)=>{
                this.setState({faculties:response.data});
            }).catch((error)=>{
                console.log(error);
            });
    }
      handleFkEventTypeIdChange(event) {
        var FkEventTypeId = event.target.value;
        this.setState({ FkEventTypeId });

    }
    handleInterestIdsChange(event) {
        var InterestId = event.target.value;
        this.setState({ InterestId });
        console.log(InterestId);
    }

    
    handleEventStartDateChange(event) {
        var EventStartDate = event.target.value;
        this.setState({ EventStartDate });
    }

    handleEventEndDateChange(event) {
        var EventEndDate = event.target.value;
        this.setState({ EventEndDate });
    }

    componentDidMount() {

        axios.get('http://unieventorapi.azurewebsites.net/api/UniversityApi').then((response) => {
            this.setState({ universities: response.data });
        }).catch((error) => {
            console.log(error);
        });

        axios.get('http://unieventorapi.azurewebsites.net/api/FacultyApi').then((response) => {
            this.setState({ faculties: response.data });
        }).catch((error) => {
            console.log(error);
        });

        axios.get('http://unieventorapi.azurewebsites.net/api/EventInterestApi').then((response) => {
            this.setState({ EventInterests: response.data });
        }).catch((error) => {
            console.log(error);
        });

        axios.get('http://unieventorapi.azurewebsites.net/api/EventTypeApi').then((response) => {
            this.setState({ EventTypes: response.data });
        }).catch((error) => {
            console.log(error);
        });

    }

    render() {
        return (

            <div class="w3-row">                 
                <div className="w3-col m2">
                    
                    <div className="w3-container">
                        <select className="w3-select w3-border w3-padding" name="option" onChange={this.handleUniversityIdChange.bind(this)}>
                            <option value="" disabled selected>Üniversite Seç</option>
                            {this.state.universities.map((item) => {
                                return <option key={item.UniversityId} value={item.UniversityId}>{item.UniversityName}</option>
                            })}
                        </select>
                    </div>

                    <div className="w3-container">

                        <label><i className="fa fa-calendar-o"></i> Etkinlik Tarih Aralığı</label>
                        <input className="w3-input w3-border" type="date" placeholder="DD MM YYYY" onChange={this.handleEventStartDateChange.bind(this)} name="CheckIn" required="" />

                    </div>
                    <div className="w3-container">

                        <label><i className="fa fa-calendar-o"></i> Etkinlik Tarih Aralığı</label>
                        <input className="w3-input w3-border" type="date" placeholder="DD MM YYYY" onChange={this.handleEventEndDateChange.bind(this)} name="CheckIn" required="" />

                    </div>

                    <div className="w3-container">
                        <label><i className="fa fa-star"></i>Etkinlik Tipi</label>
                        <select className="w3-select w3-border w3-padding" name="option" onChange={this.handleFkEventTypeIdChange.bind(this)} >
                            <option value="" disabled selected>Etkinlik Tipi Seç</option>
                            {this.state.EventTypes.map((item) => {
                                return <option key={item.FkEventTypeId} value={item.FkEventTypeId}>{item.TypeName}</option>
                            })}
                        </select>
                    </div>
                    <div className="w3-container">
                        <label><i className="fa fa-star"></i>İlgi Alanı</label>
                        <select className="w3-select w3-border w3-padding" name="option" onChange={this.handleInterestIdsChange.bind(this)} multiple>
                            <option value="" disabled selected>Etkinlik İlgi Alanı Seç</option>
                            {this.state.EventInterests.map((item) => {
                                return <option key={item.InterestId} value={item.InterestId}>{item.InterestName}</option>
                            })}
                        </select>
                    </div>
                      <p className="w3-center">
                                <button className="w3-btn w3-section w3-blue-gray w3-ripple"> Ara </button>
                            </p>

                </div>

                <div className="w3-col m10 w3-padding">
                    <div className="w3-row">
                        <SearchBar />
                        <div className="w3-container"><h2>İlginizi Çekebilecek Etkinlikler</h2></div>

                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 1" id="s1" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 2" id="s2" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 3" id="s3" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 4" id="s4" />
                        <div className="w3-container"><h2>Öne Çıkan Etkinlikler</h2></div>
                        <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event M 1" id="s1" />
                        <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event M 2" id="m2" />
                        <EventCardMedium poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event M 3" id="m3" />

                    </div>
                </div>


            </div>

        );
    }
}

export default EventsPage;