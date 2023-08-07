import React, { Component } from 'react'

export default class Practice02 extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: 0,
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        // use this.setState to change the value
        // use [] (dynamic key name) to find the right key 
        this.setState({
            [name] : Number(value),
        })
    }
    handleClick = () =>  {
        let {number1, number2} = this.state; 
        this.setState({
            sum: number1 + number2,
        })
    }
    render() {
        return (
            <div>
                <h1>FIND SUM</h1>
                <div>
                    <span>Input the first number</span>
                    <input type="number" name="number1" value={this.state.number1} onChange={this.handleChange} />
                </div>
                <div>
                    <span>Input the second number</span>
                    <input type="number" name="number2" value={this.state.number2} onChange={this.handleChange} />
                </div>
                <button onClick={this.handleClick}>Click</button>
                <div>
                    The result is: {this.state.sum}
                </div>
            </div>
        )
    }
}
