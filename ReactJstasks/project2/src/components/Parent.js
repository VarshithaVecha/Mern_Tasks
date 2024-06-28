import React, { Component } from 'react'
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>I am parent component</h1>
        <Child money="100 rupees"/>
      </div>
    )
  }
}
export default Parent;