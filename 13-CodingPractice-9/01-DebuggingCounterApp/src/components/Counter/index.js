import Component from 'react'

import './index.css'

class Counter {
  state = {count: 0}

  onDecrement = () => {
    this.state.count = this.state.count - 1;
  }

  onIncrement = () => {
    this.state.count = this.state.count + 1;
  }

  render() {
    {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onDecrement()} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onIncrement()} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
