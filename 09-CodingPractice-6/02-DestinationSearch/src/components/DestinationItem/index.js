// Write your code here
import {Component} from 'react'
import './index.css'

class DisplayImage extends Component {
  render() {
    const {destinationItem} = this.props
    return (
      <li className="destination-item">
        <img
          alt={destinationItem.name}
          className="img"
          src={destinationItem.imgUrl}
        />
        <p>{destinationItem.name}</p>
      </li>
    )
  }
}

export default DisplayImage
