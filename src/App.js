import './App.css';
import React, { useState } from 'react';
import Pad from "./components/Pad"
import Controls from "./components/Controls"

function App() {
  const [display, setDisplay] = useState('');

  const updateDisplay = (soundName) => {
    setDisplay(soundName);
  };

  return (
    <div id="drum-machine">
      <Pad updateDisplay={updateDisplay} />
      <Controls display={display} />
    </div>
  );
}

export default App;
