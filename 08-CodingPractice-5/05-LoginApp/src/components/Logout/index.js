// Write your code here
import {Component} from 'react'
import './index.css'

class LogoutButton extends Component {
  render() {
    const {logout} = this.props
    return (
      <button className="btn" onClick={logout} type="button">
        Logout
      </button>
    )
  }
}
export default LogoutButton
