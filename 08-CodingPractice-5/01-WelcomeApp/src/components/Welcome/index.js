// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  isSubscribe = () => {
    this.setState(() => ({isSubscribe: false}))
  }

  isSubscribed = () => {
    this.setState(() => ({isSubscribe: true}))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank You! Happy Learning</p>
        {isSubscribe && (
          <button className="btn" onClick={this.isSubscribe} type="button">
            Subscribe
          </button>
        )}
        {!isSubscribe && (
          <button className="btn" onClick={this.isSubscribed} type="button">
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
