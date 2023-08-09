import React, { Component } from "react";
import "./CoinFlip.css";
import head from "./Image/head.png";
import tail from "./Image/tail.png";

export default class CoinFlip extends Component {
  constructor() {
    super();
    this.state = {
      isHead: false,
      headCnt: 0,
      tailCnt: 0,
      sum: 0,
      showText: false,
    };
  }
  handleFlip = () => {
    this.setState({
        showText: false,
    })
    let flipResult = Math.random();
    if (flipResult <= 0.5) {
      this.setState({
        isHead: true,
        headCnt: this.state.headCnt + 1,
      });
    } else {
      this.setState({
        isHead: false,
        tailCnt: this.state.tailCnt + 1,
      });
    }
    this.setState({
      sum: this.state.sum + 1,
    });
    setTimeout(() => {
        this.setState({
            showText: true,
        })
    }, 3000);
  };
  render() {
    return (
      <div className="container">
        <div
          id="coin"
          className={this.state.isHead ? "heads" : "tails"}
          onClick={this.handleFlip}
        >
          <div className="side-a">
            <img src={head} alt="head" />
          </div>
          <div className="side-b">
            <img src={tail} alt="tail" />
          </div>
        </div>
        <h2>Click on coin to flip</h2>
        <p style={{ display: this.state.showText? 'block' : 'none'}}>
          Out of {this.state.sum} times, there are {this.state.headCnt} heads
          and {this.state.tailCnt} tails
        </p>
      </div>
    );
  }
}
