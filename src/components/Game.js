import { useReducer} from "react"
import React from "react";
import Reducer from "./Reducer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// We are going to do the rock papar and scissor game using reducer
/**
 * we need to make the computer choose from an array that has 3 strings rock, paper, scissors and let the player choose 3 actions types, rock, paper and scissors that will be dispatch from 3 different buttons
 * we need to make the logic for the game to compare the choices from the computer and players choice
 * Then we need a way to keep score
 * We need a way to clear the score
 */
// In this function we have an array of choices with rock, paper scissors
// we have a variable called randomNumber in which it will choose a random number from 1 to 3

const Game = () => {
  // we make score as a state, declare dispatch = to useReducer(with the reducer function, and the initial value of userScore, pcScore)
  const [score, dispatch] = useReducer(Reducer, {
    userScore: 0,
    pcScore: 0,
    answer: '',
  })

 /**
  * When the rock button is clicked, dispatch an action with the type 'rock'.
  */
  const rock = () => {
    dispatch({ type: 'rock' })
  }
/**
 * When the paper button is clicked, dispatch an action of type 'paper' to the reducer.
 */
  const paper = () => {
    dispatch({ type: 'paper' })
  }
/**
 * When the scissors button is clicked, dispatch an action of type 'scissors' to the reducer.
 */
  const scissors = () => {
    dispatch({ type: 'scissors'})
  }
  // in every button we change the value of type using dispatch
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Rock - Paper - Scissors</h1>
      <div className="score">
        <h2>User <span>{score.userScore} </span></h2>
      <ToastContainer className="toast"/>
        <h2>CPU <span>{score.pcScore}</span></h2>
      </div>
      <div className="images">
        <img src="https://marketplacecdn.yoyogames.com/images/assets/8361/icon/1560953274_large.jpg?1560953274"
         alt="rock" onClick={() => {rock()}} />
        <img src="https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png" 
        alt="paper"  onClick={() => {paper()}} />
        <img src="https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-5.jpg"
         alt="scissors" onClick={() => {scissors()}} />
      </div>
        <button onClick={() => { dispatch({type: 'clear'})}} >
            clear
        </button>
    </div>
  )
}

export default Game


