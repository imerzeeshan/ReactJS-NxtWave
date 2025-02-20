// Write your code here
import {Component} from 'react'
import './index.css'

class LoginButton extends Component {
  render() {
    const {login} = this.props
    return (
      <button className="btn" onClick={login} type="button">
        Login
      </button>
    )
  }
}
export default LoginButton
