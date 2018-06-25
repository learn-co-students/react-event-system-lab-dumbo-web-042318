// Code EyesOnMe Component Here

import React, { Component } from 'react';

class EyesOnMe extends Component {

  happy = () => {
    console.log('Good!')
  }

  angry = () => {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.happy} onBlur={this.angry}>
      Click me!
      </button>
    );
  }
}

export default EyesOnMe;
