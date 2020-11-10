import { useState } from 'react';
import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';

export function App() {

  // NEVER CALL HOOKS CONDITIONALLY
  // AND ALWAYS CALL THEM IN THE SAME PLACE
  const [counterState, setCounterState] = useState({
    counter: 0
  });

  const incrementCounter = () => {
    setCounterState({
      counter: counterState.counter + 1,
    });
  };

  return (
    // fragment instead of wrapping in a div that we dont need
    <>
      <Counter counterValue={counterState.counter}/>
      <CustomButton
        isClicked={incrementCounter}>
        Increment
      </CustomButton>
    </>
  );
}