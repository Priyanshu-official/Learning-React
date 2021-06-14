import React, { useState } from "react";
import "../styles.css";

const myList = ["Priyanshu", "Pranshu", "Sahil"];

export default function MyList() {
  function getBgColor(index) {
    if (index % 2 === 0) {
      return "white";
    } else {
      return "gray";
    }
  }
  /* Processing for onClcik handler */
  function onClickHandler(item) {
    // console.log("Clicked", item);
    // Extra feature
    var tag = "Pranshu";
    if (tag === item) {
      console.log("Clicked", item);
    }
  }

  return (
    <div>
      <h1>
        My List using <span style={{ color: "blue" }}>Map function</span>
      </h1>
      <ul>
        {myList.map((item, index) => {
          // console.log(item)
          return (
            <li
              key={item}
              onClick={() => onClickHandler(item)}
              style={{
                backgroundColor: getBgColor(index),
                padding: "0.5rem",
                cursor: "pointer"
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
