// Import useState hook from React to manage component state
import { useState } from 'react';
import './index.css';

function App() {
  // State variables to store:
  // - number: what the user types in
  // - result: the calculated factorial
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  // Function to calculate factorial
  // Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
  const calculateFactorial = () => {
    // Convert the input to a number
    const num = Number(number);

    // Check if input is empty or not a number
    if (number === '' || isNaN(num)) {
      setResult('Please enter a valid number');
      return;
    }

    // Check if number is negative
    if (num < 0) {
      setResult('Cannot calculate factorial of negative numbers');
      return;
    }

    // Calculate factorial
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial = factorial * i;
    }

    // Show the result
    setResult(`${number}! = ${factorial}`);
  };

  // Function to clear everything
  const clearAll = () => {
    setNumber('');
    setResult('');
  };

  return (
    <div className="app">
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

        {/* Information box */}
        <div className="info">
          <p><strong>What is Factorial?</strong></p>
          <p>5! = 5 × 4 × 3 × 2 × 1 = 120</p>
        </div>
      </div>
    </div>
  );
}

export default App;