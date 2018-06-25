// Code EyesOnMe Component Here
import React from "react" 

class EyesOnMe extends React.Component {
  render() {
    return (
      <button onFocus={this.focused} onBlur={this.blurred} >Focus up</button> 
    )
  }

  blurred() {
    console.log('Hey! Eyes on me!');
  }
  focused() {
    console.log('Good!');
  }
}

export default EyesOnMe
