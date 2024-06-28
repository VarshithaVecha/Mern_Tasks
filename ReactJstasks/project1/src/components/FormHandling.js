import React, { Component } from 'react';

 class FormHandling extends Component {
    constructor(){
        super();
        this.state={
            name : " ",
            age : " ",
        };
    }
    handleSubmit=()=>{
         alert(this.state.name + " " + this.state.age);
    };
  render() {
    return (
      <div>
         <label for="firstName">FirstName</label>
         <input type="text" name="firstName"
          onChange={(e) => {
            this.setState({
                name : e.target.value,
            });
          }} />
          <label for="age">Age</label>
         <input type="text" name="age"
          onChange={(e) => {
            this.setState({
                age : e.target.value,
            });
          }} />
          <button onClick={this.handleSubmit}>Submit Data</button>
      </div>
    )
  }
}
export default FormHandling;