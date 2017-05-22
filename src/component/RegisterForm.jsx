import React, { Component } from 'react';
import { makeApiRequest } from '../App.Request';
import '../css/w3.css';
import axios from 'axios';
//import * as AppRequest from "../App.Request.js"

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            universities: [],
            faculties: [],
            departments: [],
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            surname: '',
            departmentId: ''
        };
    }

    submitHandler(e) {
        e.preventDefault();

        makeApiRequest('POST', '/api/Account/Register', this.state, (data) => {
            alert('success: ' + data);
        }, () => {
            alert('error')
        });
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
        axios.get('http://localhost:60556/api/DepartmentApi').then((response) => {
            this.setState({ departments: response.data });
        }).catch((error) => {
            console.log(error);
        });


    }

 handleUniversityIdChange(event) {
        var UniversityId = event.target.value;
         axios.get('http://unieventorapi.azurewebsites.net/api/FacultyApi?UniId='+UniversityId).then((response)=>{
                this.setState({faculties:response.data});
            }).catch((error)=>{
                console.log(error);
            });
    }
    handleFacultyIdChange(event) {
        debugger;
        var FacultyId = event.target.value;
         axios.get('http://localhost:60556/api/DepartmentApi?UniId=1&FacId='+FacultyId).then((response)=>{
             debugger;
                this.setState({departments:response.data});
            }).catch((error)=>{
                console.log(error);
            });
    }
    usernameChange(event) {
     var username = event.target.value;
        this.setState({ username });
    }

    emailChange(event) {
        var email = event.target.value;
        this.setState({ email });
    }

    passwordChange(event) {
             var password = event.target.value;
        this.setState({ password });
    }

    confirmPasswordChange(event) {
               var confirmPassword = event.target.value;
        this.setState({ confirmPassword });
    }

    nameChange(event) {
              var name = event.target.value;
        this.setState({ name });
       
    }

    surnameChange(event) {
        var surname = event.target.value;
        this.setState({ surname });
    }

    departmentChange(event) {
        var departmentId = event.target.value;
        this.setState({ departmentId });
    }

    render() {
        var s = {
            width: '50px'
        };
        return (
            <div className="w3-section">
                <div className="w3-container w3-twothird">
                    <div className="w3-padding w3-card-4">
                        <h2 className="w3-text-blue-gray">Register</h2>

                        <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

                            <div className="w3-row w3-section">
                                <div className="w3-half w3-container">
                                    <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-user"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="first" type="text" placeholder="First Name" onChange={this.nameChange.bind(this)} />
                                    </div>
                                </div>

                                <div className="w3-half w3-container">
                                    <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-user"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="last" type="text" placeholder="Last Name" onChange={this.surnameChange.bind(this)} />
                                    </div>
                                </div>
                            </div>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-envelope-o"></i></div>
                                <div className="w3-rest">
                                    <input className="w3-input w3-border" name="email" type="text" placeholder="Email" onChange={this.emailChange.bind(this)} />
                                </div>
                            </div>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-user"></i></div>
                                <div className="w3-rest">
                                    <input className="w3-input w3-border" name="username" type="text" placeholder="User Name" onChange={this.usernameChange.bind(this)} />
                                </div>
                            </div>


                            <div className="w3-row w3-section">
                                <div className="w3-half w3-container">
                                    <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-key"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="password" type="text" placeholder="Password" onChange={this.passwordChange.bind(this)} />
                                    </div>
                                </div>

                                <div className="w3-half w3-container">
                                    <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-key"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="confirmPassword" type="text" placeholder="Confirm Password" onChange={this.confirmPasswordChange.bind(this)} />
                                    </div>
                                </div>
                            </div>

                        
                             <div className="w3-half">
                            <div className="w3-container">
                                <select className="w3-select w3-border w3-padding" name="option"  onChange={this.handleUniversityIdChange.bind(this)}>
                                <option value="" disabled defaultValue>Üniversite Seç</option>
                                {this.state.universities.map((item=>{
                                    return <option key={item.UniversityId} value={item.UniversityId}>{item.UniversityName}</option>
                                }))}
                               
                            </select>
                            </div>
                        </div>
                        <div className="w3-half">
                            <div className="w3-container">
                                <select className="w3-select w3-border w3-padding" name="option" onChange={this.handleFacultyIdChange.bind(this)} >
                                 <option value="" defaultValue>Fakülte Seç</option>
                                {this.state.faculties.map((item)=>{
                                    return <option key={item.FacultyId} value={item.FacultyId}>{item.FkUniversityId} - {item.FacultyName}</option>
                                })}
                            </select>
                            </div>
                        </div>
                        <div className="w3-half">
                            <div className="w3-container">
                                <select className="w3-select w3-border w3-padding" name="option" >
                                 <option value="" disabled defaultValue>Bölüm Seç</option>
                                {this.state.departments.map((item)=>{
                                    return <option key={item.DepartmentId} value={item.DepartmentId}> {item.DepartmentName}</option>
                                })}
                            </select>
                            </div>
                        </div>

                            <p className="w3-center">
                                <button className="w3-btn w3-section w3-blue-gray w3-ripple"> Register </button>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;