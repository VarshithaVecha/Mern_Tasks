import React, { Component } from 'react';

 class ClickCount extends Component {
    constructor(){
        super();
        this.state={
            count : 0,
            name : "",
        };
    }
    handleClick = () =>{
        this.setState({
            count : this.state.count + 1,
        });
    };
    handleChange = (e) =>{
        this.setState({
           name : e.target.value,
        });
    };
  render() {
    return (
      <div>
        <h1>I have clicked {this.state.count} times</h1>
        <button onClick={this.handleClick}>Count</button>

        <h2>My Name is : {this.state.name}</h2>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}
export default ClickCount;