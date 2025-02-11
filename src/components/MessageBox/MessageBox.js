import React from 'react';
import celebrating from '../Image/celebrating.gif';
import './MessageBox.css';

const MessageBox = ({ message, score, onButton, moveButton }) => {
  if (message === 'start') {
    return (
      <div className='message-box'>
        <p> Quiz for May Wen </p>
        <button className='startButton' onClick={onButton}>Start</button>
      </div>
    );
  } else if (message === 'first') {
    return (
      <div className='message-box'>
        <p> Question 1: What is my favourite colour? </p>
        <div className='button-container'>
          <button onClick={() => onButton(false)}>Blue</button>
          <button onClick={() => onButton(true)}>Green</button>
        </div>
        <div className='button-container'>
          <button onClick={() => onButton(false)}>Purple</button>
          <button onClick={() => onButton(false)}>Black</button>
        </div>
      </div>
    );
  } else if (message === 'first-right') {
    return (
      <div className='message-box'>
        <p> Correct! My favourite colour is in fact green! </p>
        <button onClick={onButton}>Next Question</button>
      </div>
    );
  } else if (message === 'first-wrong') {
    return (
      <div className='message-box'>
        <p> Incorrect! My favourite colour is <br /> green. </p>
        <button onClick={onButton}>Next Question</button>
      </div>
    );
  } else if (message === 'second') {
    return (
      <div className='message-box'>
        <p> Question 2: When is our anniversary? </p>
        <div className='button-container'>
          <button onClick={() => onButton(false)}>October 16th</button>
          <button onClick={() => onButton(false)}>December 7th</button>
        </div>
        <div className='button-container'>
          <button onClick={() => onButton(false)}>August 3rd</button>
          <button onClick={() => onButton(true)}>January 5th</button>
        </div>
      </div>
    );
  } else if (message === 'second-right') {
    return (
      <div className='message-box'>
        <p> Correct! Our anniversary is on January 5th! </p>
        <button onClick={onButton}>Next Question</button>
      </div>
    );
  } else if (message === 'second-wrong') {
    return (
      <div className='message-box'>
        <p> Incorrect! Our anniversary is on January 5th. </p>
        <button onClick={onButton}>Next Question</button>
      </div>
    );
  } else if (message === 'third') {
    return (
      <div className='message-box'>
        <p> Will you be my Valentine? </p>
          <div style={{marginTop: '70px'}} className='button-container'>
            <button className='yesButton' onClick={onButton}>Yes</button>
            <button className='noButton' onMouseOver={moveButton}>No</button>
          </div>
      </div>
    );
  } else if (message === 'score') {
    return (
      <div className='message-box'>
        <p style={{marginTop: '100px'}}> Yay! You got {Math.floor(score / 3 * 100)}% </p>
        <img style={{marginTop: '-40px'}}className='celebrating' src={celebrating} alt='celebrating'/>
      </div>
    );
  }
  
}

export default MessageBox;