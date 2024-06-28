import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
        <h1>I am child component</h1>
        <h2>child gets {this.props.money}</h2>
      </div>
    )
  }
}

export default Child
