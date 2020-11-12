import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useCounter } from './hooks/useCounter';

export function App() {

  const { counter, decrementCounter } = useCounter();

  return (
    // fragment instead of wrapping in a div that we dont need
    <>
      <Counter counterValue={counter}/>
      <CustomButton
        isClicked={decrementCounter}>
        Increment
      </CustomButton>
    </>
  );
}