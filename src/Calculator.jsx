
import { useState } from 'react';

export default function Calculator() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const calculateFactorial = () => {
    const num = Number(number);

    if (number === '' || isNaN(num)) {
      setResult('Please enter a valid number');
      return;
    }

    if (num < 0) {
      setResult('Cannot calculate factorial of negative numbers');
      return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial = factorial * i;
    }

    setResult(`${number}! = ${factorial}`);
  };

  const clearAll = () => {
    setNumber('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>Factorial Calculator</h1>
      
      {/* Input box for entering number */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />

      {/* Buttons */}
      <div className="buttons">
        <button onClick={calculateFactorial}>Calculate</button>
        <button onClick={clearAll}>Clear</button>
      </div>

      {/* Show result */}
      {result && <div className="result">{result}</div>}
    </div>
  );
}