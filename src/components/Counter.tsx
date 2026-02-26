import React, { Component } from "react";

//Define Props type
// (Empty here because this component does not receive props)
interface CounterProps {}

//  Define State type
// This is REQUIRED in TypeScript class components
interface CounterState {
  count: number; // count must always be a number
}

//  Extend Component with Props and State types
class Counter extends Component<CounterProps, CounterState> {
  // Type the state using the State interface
  state: CounterState = {
    count: 0,
  };

  //  Method stays the same but now TypeScript knows the state type
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //Render method (same logic, fixed return syntax)
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>

        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
