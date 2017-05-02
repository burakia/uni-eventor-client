import React, { Component } from 'react';
import * as AuthModule from '../App.Auth';
import { withRouter } from 'react-router';
import '../css/w3.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.state.username == '' || this.state.password == '') {
            alert('Enter username and password');
        }
        else {
            AuthModule.login(this.state.username, this.state.password, () => {
                this.props.router.push('/');
            }, () => {
                alert('login failure');
            });
        }
    }
    
    handleUserNameChange(event) {
        var userName = event.target.value;
        this.setState(prevState => ({
            username: userName,
            password: prevState.password
        }));
    }
    
    handlePasswordChange(event) {
        var password = event.target.value;
        this.setState(prevState => ({
            username: prevState.username,
            password: password
        }));
    }

    render() {
        var s = {
            width: '50px'
        };
        return (
            <div className="w3-section">
                <div className="w3-container w3-third">
                    <div className="w3-padding w3-card-4">
                        <h2 className="w3-text-blue-gray">Login</h2>

                        <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-user"></i></div>
                                <div className="w3-rest">
                                    <input onChange={this.handleUserNameChange.bind(this)} className="w3-input w3-border" name="email" type="text" placeholder="User Name" />
                                </div>
                            </div>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-key"></i></div>
                                <div className="w3-rest">
                                    <input onChange={this.handlePasswordChange.bind(this)} className="w3-input w3-border" name="phone" type="text" placeholder="Password" />
                                </div>
                            </div>

                            <div className="w3-section w3-container">
                                <input className="w3-check w3-margin-top" type="checkbox" /> Remember me
                            </div>

                            <p className="w3-center">
                                <button className="w3-btn w3-section w3-blue-gray w3-ripple"> Login </button>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);