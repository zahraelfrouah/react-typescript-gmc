import React, { Component } from "react";

//1 Define Props type
// (Empty here because this component does not receive props)
interface CounterProps {}

// 2 Define State type
// This is REQUIRED in TypeScript class components
interface CounterState {
  count: number; // count must always be a number
}

// 3 Extend Component with Props and State types
class Counter extends Component<CounterProps, CounterState> {
  // 4 Type the state using the State interface
  state: CounterState = {
    count: 0,
  };

  // 5 Method stays the same but now TypeScript knows the state type
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //6 Render method (same logic, fixed return syntax)
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {/* Event handler remains the same */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
