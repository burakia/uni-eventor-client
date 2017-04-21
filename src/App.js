import React, { Component } from 'react';

// Import navbar components
import NavbarLink from './component/NavbarLink.jsx';
import AppName from './component/AppName.jsx';
import LoginRegister from './component/LoginRegister.jsx';

// Import Page Components
import HomePage from './views/HomePage.jsx';
import LoginRegisterPage from './views/LoginRegisterPage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pageComponent: <HomePage /> };
  }

  homeCallback() {
    this.setState({ pageComponent: <HomePage /> });
  }

  eventsCallback() {
    this.setState({ pageComponent: <HomePage /> });
  }

  authCallback() {
    this.setState({ pageComponent: <LoginRegisterPage /> });
  }

  render() {
    return (
      <div className="App">
        <header className="w3-bar w3-teal">
          <div className="w3-content">
            <AppName appName="Uni Eventor" callback={this.homeCallback.bind(this)} />
            <NavbarLink text="Home" callback={this.homeCallback.bind(this)} />
            <NavbarLink text="Events" callback={this.eventsCallback.bind(this)} />
            <LoginRegister text="Login/Register" callback={this.authCallback.bind(this)} />
          </div>
        </header>

        {this.state.pageComponent}

      </div>
    );
  }
}

export default App;
