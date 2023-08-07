import React, { Component } from 'react'

export default class Children extends Component {
    constructor() {
        super();
        // initiate default
        // "State" is changable
        this.state = {
            student: "Nguyen Van A",
            question: "Good at studying?",
            answer: "No",
            display: true,
        }
    }
    handleChangeState = () => {
        // use this.setState to change state
        this.setState({
            answer: "Yes",
        })
    }
    handleToggle = () => {
        this.setState({
            display: !this.state.display,
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.titleParent}</h1>
                <p>{this.props.course}</p>
                <p>{this.props.children}</p>
                <br />
                <h1>STATE</h1>
                <p>{this.state.student}</p>
                <p>{this.state.question}</p>
                <p>{this.state.answer}</p>
                <button onClick={this.handleChangeState}>Change answer</button>
                <br />
                <h1>DEMO TOGGLE</h1>
                {this.state.display ? (
                <div>
                    <p>How is ReactJS?</p>
                    <p>NO</p>
                    <button onClick={this.handleToggle}>Click</button>
                </div>
                ) : (
                <div>
                    <p>How is ReactJS?</p>
                    <p>YES</p>
                    <button onClick={this.handleToggle}>Click</button>
                </div>
                )}
            </div>
        )
    }
}
