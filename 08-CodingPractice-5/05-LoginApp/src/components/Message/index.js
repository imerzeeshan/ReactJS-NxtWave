// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {condition} = this.props
    const message = condition ? 'Please Login' : 'Welcome User'

    return <h1 className="message">{message}</h1>
  }
}

export default Message
