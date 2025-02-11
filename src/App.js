import React, { Component } from 'react';
import MessageBox from './components/MessageBox/MessageBox';
import turtle from './components/Image/turtle.gif';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {message: 'start', 
                  score: 1};
  }

  onButton = (correctness) => {
    switch (this.state.message) {
      case 'start':
        this.setState({message: 'first'});
        break;
      case 'first':
        if (correctness) {
          this.setState({message: 'first-right', 
                          score: this.state.score + 1});
          break;
        } else {
          this.setState({message: 'first-wrong'});
          break;
        }
      case 'first-right':
      case 'first-wrong':
        this.setState({message: 'second'});
        break;
      case 'second':
        if (correctness) {
          this.setState({message: 'second-right', 
                          score: this.state.score + 1});
          break;
        } else {
          this.setState({message: 'second-wrong'});
          break;
        }
      case 'second-right':
      case 'second-wrong':
        this.setState({message: 'third'});
        break;
      case 'third':
        this.setState({message: 'score'});
        break;
    }
  }

  moveButton = () => {
    let noButton = document.getElementsByClassName("noButton")[0];
    let maxX = window.innerWidth - noButton.clientWidth - 20; 
    let maxY = window.innerHeight - noButton.clientHeight - 20;
            
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
  }

  render() {
    const { message, score } = this.state;
    return (
    <div className="App layout">
      <img className='turtle' src={turtle} alt='turtle'/>
      <MessageBox message={message} score={score} onButton={this.onButton} moveButton={this.moveButton}/>
    </div>
  );
  }
}
export default App;
