import { Component } from 'react';

export class Counter extends Component {
    render() {
        return (
            <div>
                Counter: {this.props.counterValue}
            </div>
        );
    }
}