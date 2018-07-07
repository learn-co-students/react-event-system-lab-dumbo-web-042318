// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = () => {
      console.log('Entering password...');
    }
  }

  render() {
    return (
      <input type="password" onKeyUp={this.handleChange} />
    )
  }
}

export default Keypad;
