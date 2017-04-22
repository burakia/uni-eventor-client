import React, { Component } from 'react';
import '../css/w3.css';

class LoginForm extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Login');
        // Post login info to api here...
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
                                    <input className="w3-input w3-border" name="email" type="text" placeholder="User Name" />
                                </div>
                            </div>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-key"></i></div>
                                <div className="w3-rest">
                                    <input className="w3-input w3-border" name="phone" type="text" placeholder="Password" />
                                </div>
                            </div>

                            <div className="w3-section w3-container">
                                <input class="w3-check w3-margin-top" type="checkbox" /> Remember me
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

export default LoginForm;