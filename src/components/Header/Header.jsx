import React, { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <i className="fa-solid fa-shield-cat"></i>
        <h2>Header</h2>
      </div>
    )
  }
}
