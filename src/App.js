import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './css/w3.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="w3-bar w3-teal">
          <div className="w3-content">
            <IndexLink className="w3-bar-item w3-button w3-hover-teal" to="/">Uni Eventor</IndexLink>
            <IndexLink activeClassName="w3-white" className="w3-bar-item w3-button w3-hover-white" to="/">Home</IndexLink>
            <Link activeClassName="w3-white" className="w3-bar-item w3-button w3-hover-white" to="/events">Events</Link>
            <Link activeClassName="w3-white" className="w3-bar-item w3-button w3-hover-white w3-right" to="/auth">Login/Register</Link>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
