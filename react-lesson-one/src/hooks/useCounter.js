import { useState } from 'react';

export function useCounter() {
    // NEVER CALL HOOKS CONDITIONALLY
    // AND ALWAYS CALL THEM IN THE SAME PLACE
    const [counterState, setCounterState] = useState({
        counter: 0,
        name: 'Aleksandar',
    });

    const incrementCounter = () => {
        setCounterState({
        counter: counterState.counter + 1,
        });
    };

    const decrementCounter = () => {
        setCounterState({
            counter: counterState.counter - 1,
        });
    };

    return {
        counter: counterState.counter,
        incrementCounter,
        decrementCounter,
    };
}