// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onEatMango = () => {
    this.setState((prevState) => ({count: prevState.count1 + 1}))
  }
  onEatBanana = () => {
    this.setState((prevState) => ({count: prevState.count2 + 1}))
  }
  render() {
    const {count1, count2} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1>
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div className="card1">
            <img className="image1" alt="mango" />
            <button type="button" onClick={onEatMango}>
              Eat Mango
            </button>
          </div>
          <div className="card2">
            <img className="image2" alt="banana" />
            <button type="button" onClick={onEatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter