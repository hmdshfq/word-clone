import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ guesses, setGuesses }) {
    const [value, setValue] = React.useState('');
    return (
        <>
            <form
                class='guess-input-wrapper'
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(value);
                    const nextGuesses = [
                        ...guesses,
                        { id: crypto.randomUUID(), value },
                    ];
                    setGuesses(nextGuesses);
                    setValue('');
                }}
            >
                <label for='guess-input'>Enter guess:</label>
                <input
                    id='guess-input'
                    type='text'
                    value={value}
                    minLength={5}
                    maxLength={5}
                    onChange={(e) => {
                        setValue(e.target.value.toUpperCase());
                    }}
                />
            </form>
        </>
    );
}

export default Game;
