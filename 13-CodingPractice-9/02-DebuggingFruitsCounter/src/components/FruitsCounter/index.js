import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  //  FIX1: Initialize the state with values as below
  state = {
    mangoesCount: 4,
    bananasCount: 5,
  }

  //  FIX2: Class methods should be defined using arrow functions
  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  //  FIX3: Class methods should be defined using arrow functions
  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    //  FIX4: The state should be accessed using "this"
    const {mangoesCount, bananasCount} = this.state

    return (
      // FIX5: When assigning css class to HTML element in JSX, we have to use the attribute as "className"
      <div className="app-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count"> {bananasCount}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                // FIX6: The alt attribute value of this image should be "mango"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  //   FIX7: The event handler should be passed as a reference to the onClick attribute
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  //   FIX8: The event handler should be passed as a reference to the onClick attribute
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
