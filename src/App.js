import React, { Component } from "react";
import { Route } from "react-router-dom";
import Auth from "./Auth/Auth";
import Home from "./Home";
import Callback from "./Auth/Callback";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        <Route
          path="/"
          exact
          render={(props) => <Home auth={this.auth} {...props} />}
        />
        <Route
          path="/home"
          exact
          render={(props) => <Home auth={this.auth} {...props} />}
        />
        <Route
          path="/callback"
          exact
          render={(props) => <Callback auth={this.auth} {...props} />}
        />
      </>
    );
  }
}

export default App;
