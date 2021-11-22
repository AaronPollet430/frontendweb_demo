import './App.css';
import Dice from './Dice';
import { useState } from 'react';

function App() {
  const emptyArray = new Array(2).fill(6);

  const [eyes, setEyes] = useState(emptyArray);

  const hasSnakeEyes = (eyes) => eyes.every((eye) => eye === 1);
  //const hasSnakeEyes = (eyes) => false;
  const handleRoll = (index) => {
    const newValue = Math.floor(Math.random() * 6 + 1);
    const newEyes = eyes.map((eye, i) => (i === index ? newValue : eye));
    setEyes(newEyes);
    console.log('newValue', newValue);
  };

  const reset = () => {
    setEyes(emptyArray);
  };
  return (
    <>
      <h1>Snake Eyes</h1>
      <p>Keep going but don't get 2 one's</p>
      <p>Click on a dice to roll</p>
      {eyes.map((eye, index) => (
        <Dice eye={eye} key={index} onRoll={() => handleRoll(index)} />
      ))}
      <p>Total:</p>
      <p>Max total:</p>
      {hasSnakeEyes(eyes) && (
        <div>
          <div className='comment'>Ooops you did it again</div>
          <button onClick={reset}>Play Again</button>
        </div>
      )}
    </>
  );
}

export default App;
