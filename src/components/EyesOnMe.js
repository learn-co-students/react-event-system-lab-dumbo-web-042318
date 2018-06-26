import React from 'react';

class EyesOnMe extends React.Component {
  render() {
    return (
      <button onFocus={this.good} onBlur={this.bad} />
    );
  }

  good() {
    console.log('Good!');
  }

  bad() {
    console.log('Hey! Eyes on me!');
  }
}


export default EyesOnMe;
