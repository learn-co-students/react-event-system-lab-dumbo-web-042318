// Code Keypad Component Here

import React, { Component } from 'react';

class Keypad extends Component {

  typing = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.typing}/>
    );
  }
}

export default Keypad;
