import React, { Component } from 'react';

class LoginRegister extends Component {
    render() {
        return (
            <span className="w3-bar-item w3-button w3-hover-white w3-teal w3-right"
                onClick={this.props.callback}>
                {this.props.text}
            </span>
        );
    }
}

export default LoginRegister;