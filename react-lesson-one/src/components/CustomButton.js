import { Component } from 'react';

export class CustomButton extends Component {
    render() {
        return (
            <button onClick={this.props.isClicked}>
                <div>Before children</div>
                { this.props.children }
                <div>After children</div>
            </button>
        );
    }
}