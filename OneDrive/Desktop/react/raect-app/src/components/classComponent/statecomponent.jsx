//state==> anyone can handle your state
//state can be controlled by anyone
//state can't be controlled on its own it's controlled by events(i.e functions)import React from "react";
//super act as parent constructor

import React,{Component} from "react";

class Statecomponent extends Component{
    constructor(){
        super()
        this.state={
            name:"kec",
            course:"mern"
        }
    }
    Changestate =()=>{
        console.log("kec")//use state should be used 
    }
    render(){
        return(
            <div>
                <h1>This is state component</h1>
                <h2>Name:{this.state.name}<br></br>Class: {this.state.course}class</h2>
                <h3>I am changing the state of the {this.state.name} to {this.Changestate()}</h3>
                <button onMouseOver={this.Changestate}>click here</button>
            </div>
        )
    }
}
export default Statecomponent;