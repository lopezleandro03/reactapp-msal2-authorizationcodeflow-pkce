import React, { Component } from "react";

class Callback extends Component {
  // This route is invoked after login completed
  componentDidMount() {
    this.props.auth.handleRedirectPromise();
  }
  render() {
    return <h1>Loading...</h1>;
  }
}

export default Callback;
