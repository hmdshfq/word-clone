import React from 'react';

function Guesses({guesses}) {
  return <div className='guess-results'>
  {guesses.map((guess) => (
      <div key={guess.id} className='guess'>{guess.value}</div>
  ))}
</div>;
}

export default Guesses;
