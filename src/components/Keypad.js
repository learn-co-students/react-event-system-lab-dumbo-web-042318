// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {


  key = () => {
    console.log('Entering password...')
  }
  render() {
    return (
      <input onKeyUp={this.key} type='password' />
    )
  }
}

export default Keypad;
