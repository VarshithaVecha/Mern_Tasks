import { Component } from "react";

class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            name : "varshi",
            age : 19,
        };
    }
    handleClick =() =>{
        this.setState({
            name: "varshitha",
        });
    };
  render(){
    return(
      <div>
        <h1>This is class component</h1>
        <p>hii my name is {this.state.name} and my age is {this.state.age} </p>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}

export default ClassComponent;