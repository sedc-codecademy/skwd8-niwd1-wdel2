import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useCounter } from './hooks/useCounter';

export function App() {

  const { counter, decrementCounter, incrementCounter } = useCounter(5);

  const divisibleByTen = (counter % 10) === 0;
  const message = divisibleByTen ? (<div>Number is divisible by 10.</div>) : null;

  return (
    // fragment instead of wrapping in a div that we dont need
    <>
      <Counter counterValue={counter}/>
      <CustomButton
        isClicked={incrementCounter}>
        +
      </CustomButton>
      <CustomButton
        isClicked={decrementCounter}>
        -
      </CustomButton>
      {message}
    </>
  );
}