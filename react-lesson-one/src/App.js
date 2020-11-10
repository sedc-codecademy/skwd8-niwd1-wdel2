import { Component } from 'react';
import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';

// extend the default Component class from React package
// and export it
export class App extends Component {
  
  constructor() {
    super();

    // set the initial state of the component
    this.state = {
      counter: 0,
    };
  }

  // runs when the component is mounted
  componentDidMount() {
    console.log('App mounted');
  }

  // called after component is rerendered (updated)
  componentDidUpdate() {
    console.log('App updated');
  }

  buttonClickHandler(){
    // you MUST use the setState to modify the state
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // called every time the state changes
  render() {
    console.log('App rerendering');
    
    return (
      <div>
        <Counter counterValue={this.state.counter}/>
        <CustomButton isClicked={() => this.buttonClickHandler()}>
          <div>GO1!</div>
          <div>GO2!</div>
          <div>GO3!</div>
        </CustomButton>
      </div>
    );
  }
}