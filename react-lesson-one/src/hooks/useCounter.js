import { useState } from 'react';

export function useCounter(step = 1) {
    // NEVER CALL HOOKS CONDITIONALLY
    // AND ALWAYS CALL THEM IN THE SAME PLACE
    const [counterState, setCounterState] = useState({
        counter: 0,
        name: 'Aleksandar',
    });

    const incrementCounter = () => {
        setCounterState({
        counter: counterState.counter + step,
        });
    };

    const decrementCounter = () => {
        setCounterState({
            counter: counterState.counter - step,
        });
    };

    return {
        counter: counterState.counter,
        incrementCounter,
        decrementCounter,
    };
}