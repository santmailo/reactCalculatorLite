import React, { useState } from 'react';
import './calculator.css'; // Importing CSS file

// Calculator component

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const validateInput = (input) => {
    return !isNaN(input) && input !== '';
  };

  const handleOperation = (op) => {
    if(isNaN(num1) || isNaN(num2)){
        setErrorMessage('Input should be numbers');
        setResult('');
        return;
    }
    if (!validateInput(num1)) {
      setErrorMessage('Num1 Cannot Be Empty');
      setResult('');
      return;
    }
    if (!validateInput(num2)) {
      setErrorMessage('Num2 Cannot Be Empty');
      setResult('');
      return;
    }


    setErrorMessage('');

    switch (op) {
      case '+':
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case '-':
        setResult(parseFloat(num1) - parseFloat(num2));
        break;
      case '*':
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case '/':
        setResult(parseFloat(num1) / parseFloat(num2));
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Num 1"
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Num 2"
      />
      <div className="buttons">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
      {errorMessage && (
        <div>
            <h3 className='error'>Error</h3>
            <h5>{errorMessage}</h5>
        </div>
        )}
      {result && (
        <div>
          <h3 className='success'>Success!</h3>
          <h5>Result: {result}</h5>
        </div>
      )}
    </div>
  );
};

export default Calculator;
