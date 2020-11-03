import React, { useState } from "react";

function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    //devolverme el valor inicial de counter
    setCounter(value);
  };
  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </div>
  );
}

export default CounterApp;
