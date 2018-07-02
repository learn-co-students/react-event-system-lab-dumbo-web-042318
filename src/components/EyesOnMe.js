// Code EyesOnMe Component Here
import React, {Component} from "react";

class EyesOnMe extends Component {

  eyesOnPerson = () => {
    console.log("Good!")
  }

  notFocused = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <button onFocus={this.eyesOnPerson} onBlur={this.notFocused}></button>
    )
  }
}

export default EyesOnMe;
