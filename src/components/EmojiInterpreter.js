import React, { useState } from "react";
import "../styles.css";

/* Emoji Dictionary */
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function EmojiInterpreter() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target.value);
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Hey! Emoji is not Present in Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji)
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="container">
      <div>
        <h1>
          Hey Welcome to
          <span style={{ color: "blue" }}> Emoji Interpreter</span>
        </h1>
        <input
          type="text"
          className="inputText"
          placeholder="Enter Emoji only"
          onChange={emojiInputHandler}
        />
        <div>
          <h3>
            <strong>
              Meaning 👉 <span style={{ color: "red" }}>{meaning}</span>
            </strong>
          </h3>
          <h2>Emoji We Know</h2>
          {emojiWeKnow.map((emoji) => {
            return (
              <span
                key={emoji}
                style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
                onClick={() => emojiClickHandler(emoji)}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
