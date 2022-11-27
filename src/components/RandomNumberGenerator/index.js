import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      count: randomNumber,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="gen-btn"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
