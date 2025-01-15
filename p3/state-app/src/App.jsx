import React, { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to validate input
  const validateInput = (value) => {
    if (!value) {
      return 'Input cannot be empty.';
    } else if (value.length < 3) {
      return 'Input must be at least 3 characters long.';
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      return 'Input must only contain alphabets.';
    }
    return ''; // No error
  };

  // useEffect to validate the input every time it changes
  useEffect(() => {
    const error = validateInput(inputValue);
    setErrorMessage(error);
  }, [inputValue]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Real-Time Input Validation</h1>
      <label htmlFor="inputField">Enter text: </label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          border: errorMessage ? '2px solid red' : '2px solid green',
          padding: '5px',
        }}
      />
      {errorMessage && (
        <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
      )}
      {!errorMessage && inputValue && (
        <p style={{ color: 'green', marginTop: '10px' }}>
          Input is valid: {inputValue}
        </p>
      )}
    </div>
  );
}
export default App;
