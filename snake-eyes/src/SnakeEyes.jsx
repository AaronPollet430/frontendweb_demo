import Dice from './Dice';
import React, { useState } from 'react';

/*
- dobbelsteen bijhouden
- een gegeven dobbelsteen rollen
- spel resetten
- total + max total bijhouden
- checken of er snakeyes was (allemaal 1)

*/

export default function SnakeEyes({nbrOfEyes = 2}){
  const emptyArray = new Array(nbrOfEyes).fill(6);
  const [eyes, setEyes] = useState(emptyArray);
  const [total, setTotal] = useState(0);
  const [maxTotal, setMaxTotal] = useState(0);

  const hasSnakeEyes = (eyes) => eyes.every((eye) => eye === 1);

  const handleRoll = (index) => {
    const newValue = Math.floor(Math.random() * 6 + 1);
    const newEyes = eyes.map((eye, i) => (i === index ? newValue : eye));
    const newTotal = total + newValue;
    setTotal(newTotal);
    setEyes(newEyes);
    if (hasSnakeEyes(newEyes)) { //setState works async. Not sure that eyes is already set
      setMaxTotal(Math.max(maxTotal, newTotal));
      setTotal(0);
    }
  };
  
  const reset = () => {
    setTotal(0);
    setEyes(emptyArray);
  };

  return (
    <>
      <h1>Snake Eyes</h1>
      <p>Keep going but don't get {nbrOfEyes} one's</p>
      <p>Click on a dice to roll</p>
      <p>
      {eyes.map((eye, index) => (
        <Dice eye={eye} key={index} onRoll={() => handleRoll(index)} />
      ))}
      </p>
      <p>Total: {total}</p>
      <p>Max total: {maxTotal}</p>
      {hasSnakeEyes(eyes) && (
        <>
          <div className='comment'>Ooops you did it again</div>
          <button onClick={reset}>Play Again</button>
        </>)}
    </>
  )
      
}
