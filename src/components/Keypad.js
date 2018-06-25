// Code Keypad Component Here
import React from "react"

class Keypad extends React.Component {

  render() {
    return (
      <div>
      <input onKeyUp={this.logger} type="password" />
      </div>
    )
  }

  logger() {
    console.log("Entering password...")
  }
}

export default Keypad
