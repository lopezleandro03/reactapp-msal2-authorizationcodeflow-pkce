import React, { Component } from "react";
import logo from "./logo.svg";
import "./Home.css";
import { tokenRequestForGraphApi } from "./Auth/AuthConfig";

class Home extends Component {
  render() {
    return (
      <>
        {this.props.auth.isAuthenticated() ? (
          // Here you would render your container components.
          // For this demo example I have my HTML directly here:
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hi, {this.props.auth.user().username}</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <button onClick={this.getAccessToken}>
                Request an access token for Graph API
              </button>
            </header>
          </div>
        ) : (
          this.props.auth.login()
        )}
      </>
    );
  }

  getAccessToken = () => {
    this.props.auth.getAccessToken(tokenRequestForGraphApi).then((result) => {
      alert(result);
    });
  };
}

export default Home;
