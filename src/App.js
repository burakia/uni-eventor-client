import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import * as AuthModule from './App.Auth';
import './css/w3.css';

class App extends Component {
    logout() {
        AuthModule.token = {};
    }

    getAccountLink() {
        if (AuthModule.token.access_token)
        {
            return {
                linkText: AuthModule.token.userName,
                to: '/profile/' + AuthModule.token.userName
            };
        }
        else {
            return {
                linkText: 'Login/Register',
                to: '/auth'
            };
        }
    }

    render() {
        var auth = this.getAccountLink();
        var displayLogout = {
            display: AuthModule.token.access_token ? 'block' : 'none'
        };
        return (
            <div className="App">
                <header className="w3-bar w3-teal">
                    <div className="w3-content">
                        <IndexLink className="w3-bar-item w3-button w3-hover-teal" to="/">Uni Eventor</IndexLink>
                        <IndexLink activeClassName="w3-white" className="w3-bar-item w3-button w3-hover-white" to="/">Home</IndexLink>
                        <Link activeClassName="w3-white" className="w3-bar-item w3-button w3-hover-white" to="/events">Events</Link>
                        <Link activeClassName="w3-white" className="w3-bar-item w3-button w3-hover-white" to="/profile">Profile</Link>
                        <Link className="w3-bar-item w3-button w3-hover-white w3-right" style={displayLogout} to="/" onClick={this.logout}>Logout</Link>
                        <Link activeClassName="w3-white" className="w3-bar-item w3-button w3-hover-white w3-right" to={auth.to}>{auth.linkText}</Link>
                    </div>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default App;
