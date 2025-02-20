// Write your code here
import {Component} from 'react'
import Message from '../Message'
import LoginButton from '../Login'
import LogoutButton from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="home">
        <div className="content">
          <Message condition={isLogin} />
          {isLogin && <LoginButton login={this.onClickButton} />}
          {!isLogin && <LogoutButton logout={this.onClickButton} />}
        </div>
      </div>
    )
  }
}

export default Home
