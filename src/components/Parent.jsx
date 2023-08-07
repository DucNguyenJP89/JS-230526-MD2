import React, { Component } from 'react';
import Children from "./Children";

export default class Parent extends Component {
  render() {
    const title = "Rikkei Academy";
    // use props to pass parent element props to children element
    return (
      <div>
        <Children titleParent={title} course={"ReactJS"}>
            Total: 15 times
        </Children>
      </div>
    )
  }
}
