import React, { useState } from 'react';
import './App.css';

import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxes, setState] = useState([]);
  return (
    <div className="App">
      <ColorForm inputs={boxes} setInputs={setState}/>
      {boxes.map((box, i) =>{
        return(
        <div key={i}>
        <BoxDisplay inputs={box}/>
        </div>
        );
      })}
    </div>
  );
}

export default App;