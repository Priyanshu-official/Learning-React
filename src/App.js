import React, { useState } from "react";
import "./styles.css";
import EmojiInterpreter from "./components/EmojiInterpreter";
import MyList from "./components/MyList";
export default function App() {
  /* This Logic for Like Counter increase Everytime on Click*/
  const [likeCounter, setlikeCounter] = useState(0);

  function clickHandler() {
    var newlikeCounter = likeCounter + 1;
    setlikeCounter(newlikeCounter);
  }
  /* This Logic for OnChange Inpute ans Display Name */
  const [userInput, setUserInput] = useState("");

  function inputChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      {/* Like Counter View */}
      <div className="containerCounter">
        <h1>
          Like <span style={{ color: "blue" }}> Counter! </span>
        </h1>
        <button className="btn-like" onClick={clickHandler}>
          Like Me!{" "}
        </button>{" "}
        {likeCounter}
      </div>
      <br />
      <hr />
      {/* On Chnage Text View */}
      <div className="changeInput">
        <h1>
          {" "}
          Enter <span style={{ color: "blue" }}>Text!</span>
        </h1>
        <input
          type="text"
          className="inputText"
          placeholder="Enter Something"
          onChange={inputChangeHandler}
        />
        <p>Your Input Text Here!</p>
        <span style={{ color: "red" }}>{userInput}</span>
      </div>
      <br />
      <hr />
      <MyList />
      <br />
      <hr />
      <EmojiInterpreter />
    </div>
  );
}
