import React, { Component } from 'react';

export default class Counter extends Component {

    static defaultProps = {
        step: 1,
    };

    state = {
        value: this.props.initialValue
    }
    handleIncrement = (evt) => {
        this.setState(prevState => {
            console.log('prev:', prevState)

            return {
                value: prevState.value + this.props.step
            }
        })
    }
    handleDecrement = (evt) => {
        this.setState(prevState => {
            console.log('prev:', prevState)
            return {
                value: prevState.value - this.props.step
            }
        })
    }
    render() {
        const { step } = this.props;
        const { value } = this.state;

        return (
            <div>
                <span style={{ fontSize: '50px' }}>{value}</span>
                <button type="button" onClick={this.handleIncrement}>Increment by {step}</button>
                <button type="button" onClick={this.handleDecrement}>Decrement by {step}</button>
            </div>
        );
    }
}

