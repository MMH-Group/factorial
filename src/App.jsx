import { useState } from 'react';
import './index.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateFactorial = (n) => {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const handleCalculate = () => {
    setError('');
    setResult(null);

    const num = parseInt(number);

    if (number === '' || isNaN(num)) {
      setError('Please enter a valid number');
      return;
    }

    if (num < 0) {
      setError('Factorial is not defined for negative numbers');
      return;
    }

    if (num > 170) {
      setError('Number is too large (maximum is 170)');
      return;
    }

    const factorial = calculateFactorial(num);
    setResult(factorial);
  };

  const handleReset = () => {
    setNumber('');
    setResult(null);
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Factorial Calculator</h1>
        <p className="subtitle">Enter a number to calculate its factorial</p>
        
        <div className="input-group">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a number"
            className="number-input"
          />
        </div>

        <div className="button-group">
          <button onClick={handleCalculate} className="btn btn-primary">
            Calculate
          </button>
          <button onClick={handleReset} className="btn btn-secondary">
            Reset
          </button>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {result !== null && (
          <div className="result-container">
            <h2>Result</h2>
            <p className="result-text">
              {number}! = <span className="result-value">{result.toLocaleString()}</span>
            </p>
          </div>
        )}

        <div className="info">
          <p><strong>Note:</strong> Factorial of n (n!) is the product of all positive integers less than or equal to n.</p>
          <p>Example: 5! = 5 × 4 × 3 × 2 × 1 = 120</p>
        </div>
      </div>
    </div>
  );
}

export default App;