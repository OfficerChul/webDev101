import React, { useState } from 'react';
import { format } from 'react-string-format';
import './Game.css';
import game from './game.png';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

export default function Game() {


    const [randNum, setRandNum] = useState();
    const [userValue, setUserValue] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [result, setResult] = useState("");

    const getInputValue = (event) => {
        setUserValue(event.target.value);
        console.log(userValue);

        if (userValue == null) {
            setResult("");
        }      

    }

    const compareNum = (event) => {
        setRandNum(getRandomInt(1,1))
        console.log('userValue: %d, randNum: %d', userValue, randNum);
        if (!(userValue >= 0 && userValue <= 99)) {
            setErrorMessage("Please enter a correct value.");
        } else {
            setErrorMessage("");
        }
        
        if (randNum == userValue) {
            setResult("🏆 Correct! 🏆")
        } else {
            
            setResult("🦞 Try Again :( 🦞")
        }
    }

    return (
        <div >
            <span className="game-wrapper">

                <h1>Random Number Game:</h1>
                <h2>Guess the number that computer chose!!!</h2>
                <h2>----------------------------------------</h2>
                <br />
                <h3>Please enter the number from 0 to 99</h3>
                
                <div className="user-input">
                    <input type="text" onChange={getInputValue} />  <button className='btn' onClick={compareNum}>Enter</button><br />
                    <span className='error-msg'>{errorMessage}</span><br/>
                </div>
                <h1 className='result-msg'>{result}</h1>

                <h1>Computer chose: {randNum}</h1>
            </span>      
            
        </div>
    )
}
