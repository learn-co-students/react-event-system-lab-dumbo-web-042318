import React from 'react';

export default class Keypad extends React.Component{
  handleEvent = (event) => {
    console.log('Entering password...');
  }
  render(){
    return(
      <input type='password' onKeyUp={this.handleEvent}></input>
    )
  }
}// Code Keypad Component Here
