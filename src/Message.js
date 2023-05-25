import React, { useState } from 'react';

export default function Message() {
  const [randomNumberMessage, setRandomNumberMessage] = useState('');

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      setRandomNumberMessage("These are not the droids you are looking for");
    }
    if (randomNumber === 1) {
      setRandomNumberMessage("Just keep swimming");
    }
    if (randomNumber === 2) {
      setRandomNumberMessage("Life is like a box of chocolates, you never know what you're gonna get.");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me for Advice!</button>
      {randomNumberMessage && <p>{randomNumberMessage}</p>}
    </div>
  );
}
