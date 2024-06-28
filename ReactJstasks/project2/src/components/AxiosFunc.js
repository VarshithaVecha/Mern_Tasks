import React, { Component } from 'react'
import axious from "axios";
class AxiosFunc extends Component {
    constructor(props){
        super(props);
        this.state = {
            people : [],
        };
    }
componentDidCatch(){
    axious
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
       this.setState({peeople: res.data});
    })
    .catch((error) => {
        console.log(error);
    });
}
  render() {
    return (
      <div>
        <h1>hi i am AxiosFunc component</h1>
        {console.log(this.state.people)}
      </div>
    );
  }
}
export default AxiosFunc;