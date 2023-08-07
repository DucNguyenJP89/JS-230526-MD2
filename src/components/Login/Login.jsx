import React, { Component } from 'react';
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <div className="login-form">
          <form action="">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder="Input your username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Input your password" />
            </div>
            <div className="input-group">
              <label htmlFor="confirm">Confirm your password</label>
              <input type="password" name="confirm" id="confirm" placeholder="Confirm your password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
