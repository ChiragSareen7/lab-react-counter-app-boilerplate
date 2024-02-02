import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0};
    }

    increase=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    decrease=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }

    reset=()=>{
        this.setState({
            counter:this.state.counter=0
        })
    }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div>{this.state.counter}</div>
        <div>
           <button onClick={this.increase}>+</button>
           <button onClick={this.decrease}>-</button>
           <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Counter
