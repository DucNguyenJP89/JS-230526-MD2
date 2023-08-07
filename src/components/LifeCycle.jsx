import React, { Component } from 'react'

export default class LifeCycle extends Component {
    // use constructor for initialisation
    constructor(props) {
        super(props);
        console.log("1. Initialize component");
    }
    // demo componentWillMount
    UNSAFE_componentWillMount() {
        console.log("2. Component will mount");
    }
    // demo componentWillReceiveProps
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("5. Component will receive props", nextProps);
    }
    shouldComponentUpdate() {
        console.log("6. ShouldComponentUpdate");
        return true;
    }
    UNSAFE_componentWillUpdate() {
        console.log("7. Component will update");
    }
    componentDidUpdate() {
        console.log("8. Component did Update");
    }
    // render
    render() {
        console.log("3. Render");
        return (
            <div>React Lifecycles</div>
        )
    }
    // componentDidMount
    componentDidMount() {
        console.log("4. Component Did Mount");
    }
}
