import React,{Component} from "react";

class Hello extends Component{
    constructor(){
        super()
        this.state = {
            message : "welcome everyone"
        }
    }
    changeMessage(){
        this.setState({
            message: "thank you for subscribing"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <botton onClick={() => this.changeMessage()}>Subscribe</botton>
            </div>
        )
    }
}
export default Hello;