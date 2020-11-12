import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useCounter } from './hooks/useCounter';
import { Messages } from './components/Messages';

export function App() {

  const { counter, decrementCounter, incrementCounter } = useCounter(5);

  const messageStrings = [];

  const divisibleByTen = (counter % 10) === 0;
  const divisibleByFifteen = (counter % 15) === 0;
  const divisibleByTwenty = (counter % 20) === 0;

  if (divisibleByTen) messageStrings.push({
    text: 'Counter is divisible by 10.',
    isWarning: false,
  });
  if (divisibleByFifteen) messageStrings.push({
    text: 'Counter is divisible by 15.',
    isWarning: true,
  });
  if (divisibleByTwenty) messageStrings.push({
    text: 'Counter is divisible by 20.',
    isWarning: false,
  });


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
      <Messages messages={messageStrings} />
    </>
  );
}