import { useState, useEffect } from 'react';
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

  // just a simple demo of useEffect hook to replace componentDidMount
  useEffect(() => {
    console.log('Use effect hook ran:', counterState.counter);

    return () => {
      console.log('Use effect destroy.');
    };
  }, [counterState.counter]);

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