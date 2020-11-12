import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useCounter } from './hooks/useCounter';

export function App() {

  const { counter, decrementCounter, incrementCounter } = useCounter(5);

  const messages = [];

  const divisibleByTen = (counter % 10) === 0;
  const divisibleByFifteen = (counter % 15) === 0;
  const divisibleByTwenty = (counter % 20) === 0;

  if (divisibleByTen) messages.push('Counter is divisible by 10.');
  if (divisibleByFifteen) messages.push('Counter is divisible by 15.');
  if (divisibleByTwenty) messages.push('Counter is divisible by 20.');

  // map each string in the messages array into a div element
  // use a unique key to identify each of the elements
  const messageElements = messages
    .map(
      (msg, idx) => (
      <div key={`message-${idx}`}>
        {msg}
        </div>
        )
      );

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
      {messageElements}
    </>
  );
}