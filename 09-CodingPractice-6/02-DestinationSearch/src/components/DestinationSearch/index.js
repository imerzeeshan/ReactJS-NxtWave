// Write your code here
import {Component} from 'react'
import './index.css'
import DisplayImage from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    // console.log(destinations)
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            className="search"
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destinations-container">
          {searchResults.map(eachItem => (
            <DisplayImage destinationItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
