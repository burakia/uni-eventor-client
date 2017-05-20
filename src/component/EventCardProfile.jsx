import React, { Component } from 'react';

class EventCardProfile extends Component {
    render() {
        var imgStyle = {
            cursor: 'pointer',
            width: '90%'
        };
       
        return (
            <div className="w3-card-2 w3-round w3-white">
                <div className="w3-container">
                
                    <p className="w3-center">
                            <img src={this.props.poster} className="w3-hover-opacity w3-round"
                                style={imgStyle} alt={this.props.title}
                                onClick={this.props.callback} />
                    </p>
                    
                    <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>Sakarya Üniversitesi </p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{this.props.CommunityName.map((item)=>{return item.CommunityName})}</p>
                    <p>Etkinlik Başlangıç<br></br><label><i className="fa fa-calendar-o"></i> {this.props.EventStartDate}</label></p>
                    <p>Etkinlik Bitiş<br></br><label><i className="fa fa-calendar-o"></i> {this.props.EventEndDate}</label></p>
                </div>
           </div>
            
        );
    }
}

export default EventCardProfile;