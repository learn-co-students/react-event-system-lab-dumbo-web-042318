import React from 'react';

// n the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.
class Keypad extends React.Component {


    render() {
        const typing = () => console.log('Entering password...');

        return (
            <input type="password" name="pw" onKeyUp={typing} />
        )
    }
};

export default Keypad;