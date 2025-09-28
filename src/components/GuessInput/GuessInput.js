import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    setGuess('')
  }
  const handleChange = (event) => {
    const nextGuess = event.target.value.toLocaleUpperCase();
    setGuess(nextGuess);
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required 
        minLength={5} 
        maxLength={5} 
        pattern="[a-zA-Z]{5}" 
        title="Enter exactly five letters" 
        value={guess} 
        onChange={handleChange} 
        id="guess-input" 
        type="text" 
      />
    </form>
  );
}

export default GuessInput;
