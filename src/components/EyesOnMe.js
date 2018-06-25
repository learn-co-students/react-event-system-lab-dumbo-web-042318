import React from 'react';

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
class EyesOnMe extends React.Component {
    handleFocus(arg) {
        const print = {
            blur: () => console.log('Hey! Eyes on me!'),
            focus: () => console.log('Good!')
        }

        return print[arg]
    }

    render() {

        // const print = (arg) => () => arg === true ? console.log('Good!') : console.log('Hey! Eyes on me!');

        return <button onFocus={this.handleFocus('focus')} onBlur={this.handleFocus('blur')}>Print</button>
    }
};

export default EyesOnMe;