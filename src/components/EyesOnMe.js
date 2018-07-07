// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocus = () => {
      console.log('Good!')
    }

    this.handleBlur = () => {
      console.log('Hey! Eyes on me!')
    }
  }

  render() {
    return (
      <button
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    )
  }
}

export default EyesOnMe;
