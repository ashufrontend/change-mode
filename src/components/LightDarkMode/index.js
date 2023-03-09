import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
    state = {mode:false}

    onClickMode = () => {
        this.setState(prevState => ({mode: !prevState.mode}))
    }
  render() {
      const {mode} = this.state
      const modeClassName = mode ? 'dark-mode' : 'light-mode'
      const buttonText = mode ? "Dark Mode" : "Light Mode"
    return (
      <div className="bg-container">
        <div className={`light-dark-mode-container ${modeClassName}`}
           <h1 className="heading">Click To Change Mode</h1>
           <button type="button" className="button" onClick={this.onClickMode}
           >
           {buttonText}
           </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
