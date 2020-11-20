import React, {Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontsize : 16,
    }

    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.resetState = this.resetState.bind(this)
  }

  onSetColor(params) {
    this.setState({
      color: params,
      fontsize : 16,
    })
  }
  onChangeSize(value) {
    if (this.state.fontsize + value >=8 && this.state.fontsize + value <= 40  ) {
      this.setState({
        fontsize: this.state.fontsize + value
      })
    }
    console.log(this.state.fontsize + value);
  }
  resetState() {
    this.setState({
      color: 'red',
      fontsize : 16,
    })
  }
  render() {
    return (

      <div className="container">
        <div className="app">
          <h2 className='title'>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
              <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
            </svg>
            App Text Setting 
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-expressionless" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path fillRule="evenodd" d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
          </h2>
          <div className="app-selector">
            <ColorPicker color = {this.state.color} 
            onReceiveColor = {this.onSetColor}
            />
            <SizeSetting 
              fontsize = {this.state.fontsize}
              onChangeSize = {this.onChangeSize}
            />
          </div>
          <Result 
            color = {this.state.color}
            fontsize = {this.state.fontsize}
          />
          <Reset 
          reset = {this.resetState}
          />
        </div>
      </div>





    )
  }
}
export default App;
