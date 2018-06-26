import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    <EyesOnMe />
    <Keypad />
  </div>,
  document.getElementById('global')
);
