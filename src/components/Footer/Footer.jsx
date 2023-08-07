import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms&Conditions</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Other</a></li>
            <li>Duc Nguyen &copy; 2023</li>
        </ul>
      </div>
    )
  }
}
