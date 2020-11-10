import { Component } from 'react';

// extend the default Component class from React package
// and export it
export class App extends Component {
  
  constructor() {
    super();

    // set the initial state of the component
    this.state = {
      person: {
        firstName: 'John',
        lastName: 'Doe',
      },
      counter: 0,
    };
  }

  buttonClickHandler(){
    // you MUST use the setState to modify the state
    this.setState({
      counter: this.state.counter + 1,
    });

    // react cannot deep merge the state! DO NOT DO THIS
    this.setState({
      person: {
        firstName: 'Jane'
      }
    });
  }

  //boundButtonClickHandler = this.buttonClickHandler.bind(this);

  // called every time the state changes
  render() {
    console.log('Component rerendering');
    
    return (
      <div>
        Counter value: { this.state.counter }
        <button onClick={ () => this.buttonClickHandler() }>Increment</button>
        <div> { `${this.state.person.firstName } ${this.state.person.lastName}` } </div>
      </div>
    );
  }
}