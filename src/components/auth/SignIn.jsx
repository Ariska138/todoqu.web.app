import React, { Component } from "react";

class SignIn extends Component {
  state = {};

  render() {
    return (
      <div className="container my-5">
        <h1> Sign In</h1>
        <form autoComplete="off">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
