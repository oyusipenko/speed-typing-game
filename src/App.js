import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const START_TIME = 7;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(START_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startClock() {
    setIsTimeRunning(true);
    setTimeRemaining(START_TIME);
    setText("");
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
    // eslint-disable-next-line
  }, [timeRemaining, isTimeRunning]);

  return (
    <div className="wrapper">
      <div className="app">
        <h1>Speed typing game</h1>
        <textarea
          onChange={handleChange}
          value={text}
          disabled={!isTimeRunning}
        />
        <h4>Time reamining: {timeRemaining}</h4>
        <button onClick={startClock} disabled={isTimeRunning}>
          Start
        </button>
        <h1>Word count: {wordCount}</h1>
      </div>
    </div>
  );
}

export default App;
