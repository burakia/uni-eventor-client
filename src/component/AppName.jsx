import React, { Component } from 'react';

class AppName extends Component {
    render() {
        return (
            <span className="w3-bar-item w3-button w3-hover-teal w3-teal"
                onClick={this.props.callback}>
                {this.props.appName}
            </span>
        );
    }
}

export default AppName;