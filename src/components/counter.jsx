import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handledecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <React.Fragment >
        <h1>Counter App</h1>
        <div className={this.getBadgeofclass()}>
          {this.fomratcount() }
        </div>
        <button onClick={this.handleIncrement} className=" btn btn-primary btn-sm">Increment</button>
        <button onClick={this.handledecrement} className=" btn btn-primary btn-sm m-3">Decrement</button>
      </React.Fragment>
    );
  }
  getBadgeofclass() {
    let init = "badge m-3 badge-";
    init += this.state.count === 0 ? "warning" : "secondary";
    return init;
  }

  fomratcount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
