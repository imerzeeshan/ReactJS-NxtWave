// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  showFirstname = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  showLastname = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    const firstName = 'show-first-name'
    const lastName = 'show-last-name'

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div>
            <button type="button" className="btn" onClick={this.showFirstname}>
              Show/Hide firstname
            </button>
            {first ? <p className={firstName}>Joe</p> : null}
          </div>
          <div>
            <button type="button" className="btn" onClick={this.showLastname}>
              Show/Hide lastname
            </button>
            {last ? <p className={lastName}>Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
