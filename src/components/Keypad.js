import React, { Component } from 'react';

class Keypad extends Component {

  typingPassword = () =>
    console.log('Entering password...')
  

  render(){
    return <input type="password" onKeyUp={this.typingPassword}></input>
  }
}

export default Keypad
