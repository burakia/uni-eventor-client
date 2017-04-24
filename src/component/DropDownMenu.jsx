import React, { Component } from 'react';

class DropDownMenu extends Component {
    callback(e) {
            var el = e.target.parentNode.children[1];
            var isBlock = el.style.display === 'block';
            el.style.display = isBlock ? 'none' : 'block';
    }

    render() {
        var display = {
            display: 'none'
        };
        return (
            <div className="w3-row">
                <span className="w3-conainer w3-padding w3-button w3-col s12 w3-hover-blue-gray w3-blue-gray" onClick={this.callback.bind(this)}>
                    {this.props.menuName}
                </span>
                <div className="w3-container" style={display}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DropDownMenu;