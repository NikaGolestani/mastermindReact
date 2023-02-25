import React, { useState } from "react";
import Tableinfo from "./Tableinfo";

let guessList = [];
let secretCode = `${Math.floor(Math.random() * 8999) + 1000}`;

export default function History() {
  let [guess, setGuess] = useState("1000");
  let [text, setText] = useState("");

  function changeHistory(event) {
    setGuess(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    guessList.push(guess);
    setText(
      <tfoot>
        {guessList.map(function (guess, index) {
          return <Tableinfo key={index} Guess={guess} SC={secretCode} />;
        })}
      </tfoot>
    );
  }

  //returns to App.js
  return (
    <div>
      <table>
        <thead>
          <tr className="Headings">
            <th>Guesses</th>
            <th>#Right place</th>
            <th>#Wrong place</th>
          </tr>
        </thead>
        {text}
      </table>

      <form onSubmit={handleSubmit}>
        <input
          className="guessbar"
          type="number"
          placeholder="Type your Guess"
          min="1000"
          max="9999"
          defaultValue="1000"
          onChange={changeHistory}
        />
        <input className="btn" type="submit" value="Guess" />
      </form>
    </div>
  );
}
